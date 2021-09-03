class CartItemsController < ApplicationController
    wrap_parameters format: []

    def index 
        user = @current_user
        items = user.cart_items.all
        byebug 
        render json: items
    end

    def create 
        user = @current_user
        item = user.shopping_cart.cart_items.create(item_params)
        render json: item
    end

    def update
        item = find_item
        item.update(item_params)
        render json: item

    end

    def destroy
        item = find_item
        item.destroy
        head :no_content
    end


    private

    def find_item
        @current_user.shopping_cart.cart_items.find(params[:id])
    end


    def item_params
        params.permit(:product_id, :quantity)
    end
end
