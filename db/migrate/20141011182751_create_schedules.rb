class CreateSchedules < ActiveRecord::Migration
  def change
    create_table :schedules do |t|
    	t.string :name
    	t.string :creator
    	t.boolean :public
    	t.boolean :private
    end
  end
end
