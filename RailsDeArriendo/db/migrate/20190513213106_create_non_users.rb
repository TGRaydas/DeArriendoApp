class CreateNonUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :non_users do |t|
      t.string :name
      t.string :last_name
      t.string :email
      t.string :address
      t.integer :phone

      t.timestamps
    end
  end
end
