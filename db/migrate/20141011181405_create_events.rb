class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
    	t.string :name
    	t.string :creator
    	t.string :address
    	t.integer :number_in_attendance
    	t.integer :price
    	t.string :venue_name
    	t.integer :duration
    	t.string :type
    	t.string :calendar_date
    	t.string :host_name
    	t.integer :number_males_attending
    	t.integer :number_females_attending
    	t.timestamps
    end
  end
end
