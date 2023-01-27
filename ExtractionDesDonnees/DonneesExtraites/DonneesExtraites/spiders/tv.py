import scrapy

#Dans la catégories éléctroniques on a strocké les télévisions
class TvSpider(scrapy.Spider):
    name = 'tv'
    allowed_domains = ['www.jumia.sn']
    start_urls = ['https://www.jumia.sn/tvs/']

    def parse(self, response):
        tv= response.css('div.itm.col article.prd._box._hvr')
        for t in  tv:
            yield {
                'image':t.css('img.img::attr(data-src)').get().strip(),
                'name':t.css('div.name::text').get().strip(),  
                'new-price':t.css('div.prc::text').get().strip(),
                'old-price':t.css('div.prc::attr(data-oprc)').get(),

            }