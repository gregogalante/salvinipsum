class RemoveImage < ActiveRecord::Migration[5.0]
  def change
    remove_column :profiles, :picture_file_name
    remove_column :profiles, :picture_content_type
    remove_column :profiles, :picture_file_size
    remove_column :profiles, :picture_updated_at

    add_column :profiles, :picture_url, :string
  end
end
