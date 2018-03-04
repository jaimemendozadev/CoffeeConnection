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
Make sure you're in the `crawler` directory and run:

```sh
scrapy crawl <item_src> --set FEED_FORMAT=json --set FEED_URI="../feeds/%(time)s-%(name)s.json"
```

Exported feeds are saved in the `feeds` directory.
