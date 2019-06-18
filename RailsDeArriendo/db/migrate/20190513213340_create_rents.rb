class CreateRents < ActiveRecord::Migration[5.2]
  def change
    create_table :rents do |t|
      t.references :lessor, references: :users
      t.references :lessee, references: :users

      t.timestamps
    end
  end
end
