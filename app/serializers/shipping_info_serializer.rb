class ShippingInfoSerializer < ActiveModel::Serializer
  attributes :id, :ship_to, :address, :address_2, :city, :state, :zip
  has_one :user
end
