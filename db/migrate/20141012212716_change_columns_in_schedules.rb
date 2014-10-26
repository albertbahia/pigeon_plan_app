class ChangeColumnsInSchedules < ActiveRecord::Migration
  def change
  	remove_column :schedules, :public, :boolean
  	remove_column :schedules, :private, :boolean
  	add_column :schedules, :public_view, :boolean
  	add_column :schedules, :private_view, :boolean
  end
end
