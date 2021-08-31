class StoresController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index 
        stores = Store.all
        render json: stores
    end

    def show
        store = Store.find(params[:id])
        if store
            render json: store
        else
            render json: {error: "Store not found"}, status: :unprocessable_entity
        end
    end
end
