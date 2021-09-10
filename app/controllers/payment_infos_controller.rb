class PaymentInfosController < ApplicationController
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
        payment = PaymentInfo.last
        render json: payment
    end

    def create 
        payment = @current_user.payment_info.create(payment_params)
        render json: payment
    end

    private

    def payment_params
        params.permit(:card_type, :name_on_card, :card_number, :expiration, :cvv, :user_id)
    end
end
