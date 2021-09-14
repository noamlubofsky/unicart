class PaymentInfo < ApplicationRecord
  belongs_to :user
  validates :card_type, presence: true
  validates :name_on_card, presence: true
  validates :card_number, presence: true, length: {minimum: 16, maximum: 16}
  validates :expiration, presence: true
  validates :cvv, presence: true, length: {minimum: 3, maximum: 3}
end
