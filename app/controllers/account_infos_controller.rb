class AccountInfosController < ApplicationController
    wrap_parameters format: []

    def show
        user = @current_user
        info = user.account_info.last
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