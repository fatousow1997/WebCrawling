import scrapy

#Dans la catégories éléctroménagers on a strocké les réfrigérateurs
class RefrigerateursSpider(scrapy.Spider):
    name = 'refrigerateurs'
    allowed_domains = ['www.jumia.sn']
    start_urls = ['https://www.jumia.sn/frigo-refrigerateurs/']

    def parse(self, response):
        refrigerateurs= response.css('div.-paxs.row._no-g._4cl-3cm-shs article.prd._fb.col.c-prd')
        for refg in  refrigerateurs:
            yield {
                'image':refg.css('img.img::attr(data-src)').get().strip(),
                'name':refg.css('h3.name::text').get().strip(),  
                'new-price':refg.css('div.prc::text').get().strip(),
                'old-price':refg.css('div.old::text').get(),

            }