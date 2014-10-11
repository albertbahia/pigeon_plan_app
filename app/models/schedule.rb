class Schedule < ActiveRecord::Base
	belongs_to :user
	has_belongs_to_many :events
end