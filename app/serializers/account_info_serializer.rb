class AccountInfoSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email
  has_one :user
end
