class ShippingInfoSerializer < ActiveModel::Serializer
  attributes :id, :address, :address_2, :city, :state, :zip
  has_one :user
end
