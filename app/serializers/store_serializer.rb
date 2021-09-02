class StoreSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :products
  has_many :categories, through: :products

end
