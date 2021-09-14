class ReviewsController < ApplicationController
    wrap_parameters format: []

    def show
        product = Product.find(params[:id])
        if product
            render json: product.reviews
        else
            render json: {error: "Product not found"}, status: :unprocessable_entity
        end
    end

    def create 
        review = @current_user.reviews.create(review_params)
        render json: review
    end

    private

    def review_params
        params.permit(:content, :product_id)
    end
end
