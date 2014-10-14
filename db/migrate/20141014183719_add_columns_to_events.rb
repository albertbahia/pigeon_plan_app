class AddColumnsToEvents < ActiveRecord::Migration
  def change
  	add_column :events, :public_view, :boolean
  	add_column :events, :private_view, :boolean
  end
end
