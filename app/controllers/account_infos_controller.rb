class AccountInfosController < ApplicationController
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
        info = AccountInfo.last
        render json: info
    end

    def create 
        account = AccountInfo.create(account_params)
        render json: account
    end

    private

    def account_params
        params.permit(:first_name, :last_name, :email, :user_id)
    end
end
