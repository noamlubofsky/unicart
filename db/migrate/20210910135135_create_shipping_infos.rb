class CreateShippingInfos < ActiveRecord::Migration[6.1]
  def change
    create_table :shipping_infos do |t|
      t.string :address
      t.string :address_2
      t.string :city
      t.string :state
      t.integer :zip
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
