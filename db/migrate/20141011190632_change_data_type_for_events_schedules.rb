class ChangeDataTypeForEventsSchedules < ActiveRecord::Migration
  def change
  	remove_column :events_schedules, :event_id
  	remove_column :events_schedules, :schedule_id
  	add_reference :events_schedules, :event, index: true
  	add_reference :events_schedules, :schedule, index: true
  end
end
