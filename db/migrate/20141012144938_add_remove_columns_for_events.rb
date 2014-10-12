class AddRemoveColumnsForEvents < ActiveRecord::Migration
  def change
  	remove_column :events, :address, :string
  	add_column :events, :street_address, :string
  	add_column :events, :city, :string
  	add_column :events, :state, :string
  	add_column :events, :zip_code, :string
  end
end
