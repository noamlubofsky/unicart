class ShippingInfosController < ApplicationController
    wrap_parameters format: []

    # def show
    #     product = Product.find(params[:id])
    #     if product
    #         render json: product.reviews
    #     else
    #         render json: {error: "Product not found"}, status: :unprocessable_entity
    #     end
    # end

    def show
        shipping = ShippingInfo.last
        render json: shipping
    end

    def create 
        shipping = @current_user.shipping_info.create(shipping_params)
        render json: shipping
    end

    private

    def shipping_params
        params.permit(:address, :address_2, :city, :state, :zip, :user_id)
    end
end
