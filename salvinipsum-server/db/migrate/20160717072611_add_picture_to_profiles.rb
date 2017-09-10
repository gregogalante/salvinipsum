class AddPictureToProfiles < ActiveRecord::Migration
  def change
    add_attachment :profiles, :picture
  end
end
