class CreateParagraphs < ActiveRecord::Migration
  def change
    create_table :paragraphs do |t|
      t.integer :profile_id
      t.string :facebook_id
      t.timestamps null: false
    end
  end
end
