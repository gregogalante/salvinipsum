class AddControlToPhrases < ActiveRecord::Migration
  def change
    add_column :phrases, :checked, :boolean, default: false
    add_column :phrases, :usage, :integer, default: 0
  end
end
