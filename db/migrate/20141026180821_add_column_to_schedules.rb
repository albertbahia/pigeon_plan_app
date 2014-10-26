class AddColumnToSchedules < ActiveRecord::Migration
  def change
  	add_column :schedules, :creator_id, :integer
  end
end
