class EventsController < ApplicationController

	def index
		@events = Event.all
	end

	def show
		@event = Event.find(params[:id])
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
		params.require(:event).permit(:name, :creator, :street_address, :number_in_attendance, :price, :venue_name, :duration, :event_type, :calendar_date, :host_name, :number_males_attending, :number_females_attending, :city, :state, :zip_code)
	end

end