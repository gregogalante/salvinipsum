class CreateWordUsages < ActiveRecord::Migration
  def change
    create_table :word_usages do |t|
      t.integer :profile_id
      t.integer :word_id
      t.timestamps null: false
    end
  end
end
