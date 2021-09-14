class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :price, :inventory
  has_one :store
  has_one :category
  # has_many :reviews
  # has_many :cart_items
end
