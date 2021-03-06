class ShippingInfosController < ApplicationController
    wrap_parameters format: []

def index
    user = @current_user
    shipping = user.shipping_info.all
    render json: shipping
end

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
    params.permit(:ship_to, :address, :address_2, :city, :state, :zip, :user_id)
end
end
