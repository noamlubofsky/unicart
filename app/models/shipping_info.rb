class ShippingInfo < ApplicationRecord
  belongs_to :user
  validates :ship_to, presence: true
  validates :address, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :zip, presence: true, length: {minimum: 5, maximum: 5}
end
