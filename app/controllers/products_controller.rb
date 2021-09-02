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
end
