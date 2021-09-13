class AccountInfo < ApplicationRecord
  belongs_to :user
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, inclusion: { in: %w(@)}

end
