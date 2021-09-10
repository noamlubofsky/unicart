class User < ApplicationRecord
    has_many :payment_info, dependent: :destroy
    has_many :shipping_info, dependent: :destroy
    has_one :shopping_cart, dependent: :destroy
    has_many :account_info, dependent: :destroy
    has_many :cart_items, through: :shopping_cart
    has_many :reviews
end
