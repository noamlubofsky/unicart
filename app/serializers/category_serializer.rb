class CategorySerializer < ActiveModel::Serializer
  attributes :id, :category
  has_many :products
    has_many :stores, through: :products
end
