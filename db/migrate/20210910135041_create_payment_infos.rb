class CreatePaymentInfos < ActiveRecord::Migration[6.1]
  def change
    create_table :payment_infos do |t|
      t.string :card_type
      t.string :name_on_card
      t.string :card_number
      t.string :expiration
      t.integer :cvv
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
