import scrapy


class TelephoneiphonejumiaSpider(scrapy.Spider):
    name = 'TelephoneIphoneJumia'
    allowed_domains = ['www.jumia.sn']
    start_urls = ['https://www.jumia.sn/iphone/']

    def parse(self, response):
        boutique=response.css('article.prd')
        for bk in boutique:
            yield {
                'image':bk.css('a.core img::attr(data-src)').get(),
                'nom':bk.css('h3.name::text').get(),  
                'new-price':bk.css('div.prc::text').get(),
                'old-price':bk.css('div.old::text').get(),
                'url': 'www.jumia.sn'+bk.css('a.core::attr(href)').get()          
            }
