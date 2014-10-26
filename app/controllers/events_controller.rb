class EventsController < ApplicationController
	before_action :authorize, only: [:edit]


	def index
		if current_user
			@events = Event.all
			@events = Event.where(creator_id: current_user.id)
		else
			@events = Event.all
		end
	end

	def show
		@event = Event.find(params[:id])
	end

	def new
		params[:creator_id] = current_user.id
		params[:creator] = current_user.username
		@event = Event.new(:creator_id => params[:creator_id], :creator => params[:creator])
	end

	def create
		params[:creator_id] = current_user.id
		params[:creator] = current_user.username
		@event = Event.new(event_params)
		if @event.save
			redirect_to user_home_path
		else
			render :new
		end
	end

	def edit
		@event = Event.find(params[:id])
	end

	def update
		@event = Event.find(params[:id])
		@event.update(event_params)
		redirect_to events_path
	end

	def destroy
		@event = Event.find(params[:id])
		@event.destroy
		redirect_to events_path
	end

	private
	def event_params
		params.require(:event).permit(:name, :creator, :street_address, :number_in_attendance, :price, :venue_name, :duration, :event_type, :calendar_date, :host_name, :number_males_attending, :number_females_attending, :city, :state, :zip_code, :creator_id, :public_view, :private_view)
	end

end