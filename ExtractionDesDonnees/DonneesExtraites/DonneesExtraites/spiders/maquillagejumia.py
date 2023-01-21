import scrapy


class BeauteSpider(scrapy.Spider):
    name = 'maquillage'
    allowed_domains = ['www.jumia.sn']
    start_urls = ['https://www.jumia.sn/maquillage/']

    def parse(self, response):
        beaute = response.css('div.-paxs.row._no-g._4cl-3cm-shs article.prd._fb.col.c-prd')
        for beaut in beaute:
            yield {
                'image':beaut.css('img.img::attr(data-src)').get().strip(),
                'name':beaut.css('h3.name::text').get().strip(),
                'new-price':beaut.css('div.prc::text').get().strip(),
                'old-price':beaut.css('div.old::text').get(),
                'url':'www.jumia.sn'+beaut.css('a.core::attr(href)').get(),
            }