class RemoveImage < ActiveRecord::Migration[5.0]
  def change
    add_column :profiles, :picture_url, :string
  end
end
