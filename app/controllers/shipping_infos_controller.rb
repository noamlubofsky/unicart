class ShippingInfosController < ApplicationController
    wrap_parameters format: []

    def show
        user = @current_user
        shipping = user.shipping_info.last
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
