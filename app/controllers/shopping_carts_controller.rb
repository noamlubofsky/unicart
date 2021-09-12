class ShoppingCartsController < ApplicationController
    wrap_parameters format: []

    # def show
    #     cart = ShoppingCart.find(params[:id])
    #     if cart
    #         render json: cart
    #     else
    #         render json: {error: "Cart not found"}, status: :unprocessable_entity
    #     end
    # end

    def show
        user = @current_user
        cart = user.shopping_cart
        render json: cart
    end
end
