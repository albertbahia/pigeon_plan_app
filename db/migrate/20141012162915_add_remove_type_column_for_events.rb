class AddRemoveTypeColumnForEvents < ActiveRecord::Migration
  def change
  	remove_column :events, :type, :string
  	add_column :events, :event_type, :string
  end
end
