class CreateUserProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :user_profiles do |t|
      t.string :name
      t.string :last_name
      t.string :city
      t.string :address
      t.string :sex
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
