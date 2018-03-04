# Menu Scraper
Scrapes drink/food menus from a list of online catalogs.

Supports:
* Starbucks

## Requirements
* Python 3.4+

## Install
You'll need [`virtualenv`](https://virtualenv.pypa.io/en/stable/) to get started.

```sh
# Activate virtualenv.
. venv/bin/activate

# Install dependencies.
pip3 install -r requirements.txt
```

## Usage
```sh
# Set CC_PATH to the path of the main CoffeeConnection directory.
CC_PATH="/Users/ylou/code/CoffeeConnection"

# Navigate to the crawler directory.
cd ${CC_PATH}/tools/menu_scraper/crawler

# Set $SPIDER_NAME to the name of your desired scraper (specified in the *_spider.py file).
SPIDER_NAME="starbucks"

# Run the scraper.
scrapy crawl ${SPIDER_NAME} --set FEED_FORMAT=json --set FEED_URI="${CC_PATH}/seed/%(time)s-%(name)s.json"
```