class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :api_key
      t.string :email

      t.timestamps null: true
    end
  end
end
