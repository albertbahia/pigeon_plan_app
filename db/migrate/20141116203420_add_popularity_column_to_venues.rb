class AddPopularityColumnToVenues < ActiveRecord::Migration
  def change
  	add_column :venues, :popularity_rating, :integer
  end
end
