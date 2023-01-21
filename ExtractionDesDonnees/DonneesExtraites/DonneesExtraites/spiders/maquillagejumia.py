import scrapy


class MaquillagejumiaSpider(scrapy.Spider):
    name = 'maquillagejumia'
    allowed_domains = ['www.jumia.sn']
    start_urls = ['http://www.jumia.sn/']

    def parse(self, response):
        pass
