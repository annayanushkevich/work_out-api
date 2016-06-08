class CreateWorkOuts < ActiveRecord::Migration
  def change
    create_table :work_outs do |t|
      t.string :exercise
      t.integer :time
      t.integer :calories_burned

      t.timestamps null: true
    end
  end
end
