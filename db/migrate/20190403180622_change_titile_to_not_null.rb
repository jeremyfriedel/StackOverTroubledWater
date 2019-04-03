class ChangeTitileToNotNull < ActiveRecord::Migration[5.2]
  def change
    change_column :questions, :title, :string, null: false
  end
end
