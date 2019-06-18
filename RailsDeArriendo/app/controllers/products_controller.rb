class ProductsController < ApplicationController
    def all_products
        products = Product.all
        all = []
        d = []
        products.each {|p| p[:image_file_name] = p.image.url}
        d.push(products[0])
        Array.new(products.length-1) {|i| i+1 }.each do |i|        
            if i%3 == 0 
                all.push(d)   
                d = []
                puts(i)
            end
            d.push(products[i])
        end
        all.push(d)
        render :json => {products:all}
    end
    
end
