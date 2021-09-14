class ProductsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index 
        products = Product.all
        render json: products
    end

    def show
        product = Product.find(params[:id])
        if product
            render json: product, include: :store
        else
            render json: {error: "Product not found"}, status: :unprocessable_entity
        end
    end

    # def self.related(category)
    #         category = category 
    #     end
    #     results = ActiveRecord::Base.connection.execute("SELECT * FROM products WHERE category=#{category} ORDER BY RANDOM() LIMIT 3;")
    #     render json: results
    # end
end
