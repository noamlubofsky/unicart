class PaymentInfosController < ApplicationController
        wrap_parameters format: []

        def index
            user = @current_user
            payment = user.payment_info.all
            render json: payment
        end

    def show
        user = @current_user
        payment = user.payment_info.last
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
