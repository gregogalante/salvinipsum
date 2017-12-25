class CreatePhrases < ActiveRecord::Migration
  def change
    create_table :phrases do |t|
      t.string :content
      t.integer :words_count
      t.integer :paragraph_id
      t.integer :paragraph_position
      t.integer :profile_id
      t.timestamps null: false
    end
  end
end
