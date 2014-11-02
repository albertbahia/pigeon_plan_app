class CreateVenues < ActiveRecord::Migration
  def change
    create_table :venues do |t|
    	t.string :name
    	t.string :street
    	t.string :city
    	t.string :state
    	t.string :country
    	t.float :latitude
    	t.float :longitude
    end
  end
end
