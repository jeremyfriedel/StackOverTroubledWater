class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.boolean :type, null: false
      t.integer :user_id, null: false
      t.integer :answer_id, null: false
      t.timestamps
    end
    add_index :likes, :user_id
    add_index :likes, :answer_id, unique: true
  end
end
