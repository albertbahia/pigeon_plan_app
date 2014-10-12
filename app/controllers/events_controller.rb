class EventsController < ApplicationController

	def index
	end

	def show
	end

	def new
	end

	def create
	end

	def edit
	end

	def update
	end

	def destroy
	end

	private
	def event_params
		params.require(:event).permit(:name, :creator, :address, :number_in_attendance, :price, :venue_name, :duration, :type, :calendar_date, :host_name, :number_males_attending, :number_females_attending)
	end

end