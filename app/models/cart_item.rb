class CartItem < ApplicationRecord
  belongs_to :store
  belongs_to :shopping_cart
  belongs_to :product
end
