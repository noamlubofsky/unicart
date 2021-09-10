class PaymentInfoSerializer < ActiveModel::Serializer
  attributes :id, :card_type, :name_on_card, :card_number, :expiration, :cvv
  has_one :user
end
