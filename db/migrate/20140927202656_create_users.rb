class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
    	t.string :first_name
    	t.string :last_name
    	t.string :gender
    	t.integer :age
    	t.integer :zip_code
    	t.string :street_address
    	t.string :city
    	t.string :state
    	t.string :interest
    	t.string :username
    	t.string :email
    	t.string :profile_type
    	t.integer :telephone_number
    	t.string :password_digest
    end
  end
end
