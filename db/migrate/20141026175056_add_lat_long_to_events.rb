class AddLatLongToEvents < ActiveRecord::Migration
  def change
  	add_column :events, :latitude, :integer
  	add_column :events, :longitude, :integer
  end
end
