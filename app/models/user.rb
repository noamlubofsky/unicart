class User < ApplicationRecord
    has_secure_password
    has_one :shopping_cart
    has_many :cart_items, through: :shopping_cart
    has_many :reviews
end
