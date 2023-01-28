import scrapy

class OrdinateurSpider(scrapy.Spider):
    name = 'ordinateurimprimante'
    allowed_domains = ['www.jumia.sn']
    start_urls = ['https://www.jumia.sn/ordinateurs-imprimantes/']

    def parse(self, response):
        orditeurimprimante = response.css('div.-paxs.row._no-g._4cl-3cm-shs article.prd._fb.col.c-prd')
        for ordi in orditeurimprimante:
            yield {
                'image':ordi.css('img.img::attr(data-src)').get().strip(),
                'name':ordi.css('h3.name::text').get().strip(),
                'new-price':ordi.css('div.prc::text').get().strip(),
                'old-price':ordi.css('div.old::text').get(),


            }