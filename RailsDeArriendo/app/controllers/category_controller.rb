class CategoryController < ApplicationController
    def all_categories
        categories = Category.all
        categories.each {|p| p[:image_file_name] = p.image.url}
        render :json => {categories:categories}
    end
end
