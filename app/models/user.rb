class User < ActiveRecord::Base
	belongs_to :schedule
	has_many :events
end
