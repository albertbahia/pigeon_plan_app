class CreateEventsSchedules < ActiveRecord::Migration
  def change
    create_table :events_schedules do |t|
    	t.integer :event_id
    	t.integer :schedule_id
    end
  end
end
