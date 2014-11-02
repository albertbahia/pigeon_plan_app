class AddVenueIdColumnToEvents < ActiveRecord::Migration
  def change
  	add_column :events, :venue_id, :integer
  end
end
