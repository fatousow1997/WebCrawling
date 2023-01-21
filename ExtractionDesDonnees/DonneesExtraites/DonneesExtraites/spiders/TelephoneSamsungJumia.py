import scrapy


class TelephonesamsungjumiaSpider(scrapy.Spider):
    name = 'TelephoneSamsungJumia'
    allowed_domains = ['www.jumia.sn']
    start_urls = ['https://www.jumia.sn/mlp-boutiques-officielles/']

    def parse(self, response):
        boutique=response.css('article.prd')
        for bk in boutique:
            yield {
                'image':bk.css('a.core img::attr(data-src)').get(),
                'Nom':bk.css('div.name::text').get(),  
                'Nouveau Prix':bk.css('div.prc::text').get(),
                
            }
