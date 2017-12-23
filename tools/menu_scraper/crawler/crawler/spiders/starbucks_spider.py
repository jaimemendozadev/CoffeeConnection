import logging
import re

import scrapy


class StarbucksSpider(scrapy.Spider):
  """ Implementation of scrapy.Spider for Starbuck's drink/food menu.
  """
  name = "starbucks"

  PAGE_RE = re.compile(r'page=(\d+)')
  DECIMAL_RE_STR = r'\d+\.\d+'
  GRAM_RE_STR = r'[a-zA-Z]*g'
  NUTRITION_RE_MAP = {
      k: re.compile(v)
      for k, v in {
          'calories': r'Calories (\d+)',
          'calories_from_fat': r'Calories from Fat (\d+)',
          'total_fat': r'Total Fat (\d+{1}|{0}{1})'.format(DECIMAL_RE_STR, GRAM_RE_STR),
          'saturated_fat': r'Saturated Fat (\d+{1}|{0}{1})'.format(DECIMAL_RE_STR, GRAM_RE_STR),
          'trans_fat': r'Trans Fat (\d+{1}|{0}{1})'.format(DECIMAL_RE_STR, GRAM_RE_STR),
          'cholesterol': r'Cholesterol (\d+{})'.format(GRAM_RE_STR),
          'sodium': r'Sodium (\d+{})'.format(GRAM_RE_STR),
          'total_carbohydrate': r'Total Carbohydrate (\d+{})'.format(GRAM_RE_STR),
          'dietary_fiber': r'Dietary Fiber (\d+{})'.format(GRAM_RE_STR),
          'sugars': r'Sugars (\d+{})'.format(GRAM_RE_STR),
          'protein': r'Protein (\d+{})'.format(GRAM_RE_STR),
          'caffeine': r'Caffeine (\d+{0}|\d+–\d+{0})'.format(GRAM_RE_STR),
      }.items()
  }

  def start_requests(self):
    urls = [
        'https://www.starbucks.com/menu/catalog/product?drink=bottled-drinks,refreshers,evolution-juice,iced-coffee,iced-tea,bottled-drinks,brewed-coffee,chocolate,espresso,frappuccino-blended-beverages,kids-drinks-and-other,smoothies,sodas&food=bakery,mercato,bistro-boxes,petites,hot-breakfast,sandwiches-panini-and-wraps,ice-cream,yogurt-and-fruit',
    ]
    for url in urls:
      yield scrapy.Request(url=url, callback=self.parse)

  def parse_details(self, response):
    """Parses a menu item detail page.
    """
    name = response.xpath('//div[@id="content"]//h1[1]/text()').extract_first()
    if name:
      image_link = response.urljoin(
          response.xpath('//div[@id="content"]//img[1]/@src').extract_first())
      sizes = self._extract_sizes(response)
      nutrition_facts = self._extract_nutrition_facts(response)
      ingredients = self._extract_ingredients(response)
      yield {
          'name': name,
          'image_link': image_link,
          'details_link': response.url,
          'sizes': sizes,
          'nutrition_facts': nutrition_facts,
          'ingredients': ingredients
      }

  def parse(self, response):
    """Parses the menu catalog page.
    """
    items = response.xpath('//div[contains(@class, "category")]/ol/li')
    for item in items:
      # for item in [items[0]]:
      details_link = response.urljoin(item.xpath('a/@href').extract_first())
      if details_link:
        yield response.follow(details_link, callback=self.parse_details)

    next_page = response.xpath(
        '//a[@title="view next page"]/@href').extract_first()
    if next_page is not None:
      yield response.follow(next_page, callback=self.parse)

  @staticmethod
  def _join_children_text(node):
    """Calls text() on every direct child of |node| and joins the resulting fragments.
    """
    return "".join(node.xpath(".//text()").extract())

  @classmethod
  def _get_page(cls, url):
    """Parses out the page number from a URL. Defaults to 1 if not found."""
    page_match = cls.PAGE_RE.search(url)
    if page_match and len(page_match.groups()) == 1:
      return int(page_match.group(1))
    return 1

  def _extract_sizes(self, response):
    """Returns a list of size labels extracted from |response|.
    """
    return response.xpath(
        '//div[@class="filter"]//select/option/text()').extract()

  def _extract_nutrition_facts(self, response):
    """Returns a dict of nutrition facts (e.g. 'calories': '60g') extracted from |response|. 
    
    Weights are given in grams and may come in ranges.
    """
    rows = response.xpath('//table[@class="nutrition"]/tr/td')
    if not rows:
      return {}

    # For some unknown reason these strings are encoded in Windows-1252 instead of UTF-8.
    remaining_rows = [
        self._join_children_text(row).encode('raw_unicode_escape')
        .decode('cp1252') for row in rows
    ]
    facts = {}
    for fact, fact_re in self.NUTRITION_RE_MAP.items():
      found_i = -1
      for i, row in enumerate(remaining_rows):
        fact_match = fact_re.match(row)
        if fact_match:
          facts[fact] = fact_match.group(1)
          found_i = i
      if found_i >= 0:
        del remaining_rows[found_i]
    for remaining in remaining_rows:
      # Should be rare (i.e. only on new nutrition fact types).
      if re.match(r'^[A-Z]', remaining):
        logging.info("[UNKNOWN NUTRITION FACT] %s", remaining)
    return facts

  def _extract_ingredients(self, response):
    """Returns a list of ingredients extracted from |response|.

    Ingredients that have nested ingredient lists are represented as a tuple of (ingredient_name, [sub-ingredients]).
    """
    text = response.xpath('//div[@id="ingredients"]//p//text()').extract()
    if not text:
      return []

    result = []
    ingredients = [s.strip() for s in "".join(text).split(",")]
    inside_nested = False
    for i, ingredient in enumerate(ingredients):
      # Removes period from last ingredient
      if i == len(ingredients) - 1:
        ingredient = ingredient[:-1]

      if inside_nested:
        if ingredient.endswith(']'):
          result[-1][1].append(ingredient[:-1])
          inside_nested = False
        else:
          result[-1][1].append(ingredient)
        continue

      if '[' in ingredient:
        frags = ingredient.split('[')
        if len(frags) == 2:
          result.append((frags[0].strip(), [frags[1].strip()]))
          inside_nested = True
      else:
        result.append(ingredient)
    return result
