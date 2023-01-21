import scrapy


class JumiaSpider(scrapy.Spider):
    name = 'jumia'
    allowed_domains = ['www.jumia.sn']
    start_urls = ['http://www.jumia.sn/']

    def parse(self, response):
        pass
