class RemoveWords < ActiveRecord::Migration
  def change
    drop_table :words
    drop_table :word_usages
  end
end
