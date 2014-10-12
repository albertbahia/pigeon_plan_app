class User < ActiveRecord::Base
	belongs_to :schedule
	has_many :events

	has_secure_password
end
