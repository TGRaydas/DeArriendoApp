class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :price
      t.string :description
      t.bigint :user, foreign_key: true
      t.references :non_users, foreign_key: true

      t.timestamps
    end
  end
end
