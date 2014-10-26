class SchedulesController < ApplicationController
	before_action :authorize, only: [:edit]

	def index
		if current_user
			@schedules = Schedule.all
			@schedules = Schedule.where(creator_id: current_user.id)
		else
			@schedules = Schedule.all
		end
	end

	def show
		@schedule = Schedule.find(params[:id])
	end

	def new
		params[:creator_id] = current_user.id
		params[:creator] = current_user.username
		@schedule = Schedule.new(:creator_id => params[:creator_id], :creator => params[:creator])
	end

	def create
		params[:creator_id] = current_user.id
		params[:creator] = current_user.username
		@schedule = Schedule.new(schedule_params)
		if @schedule.save
			redirect_to user_home_path
		else
			render :new
		end
	end

	def edit
		@schedule = Schedule.find(params[:id])
	end

	def update
		@schedule = Schedule.find(params[:id])
		@schedule.update(schedule_params)
		redirect_to schedule_path(@schedule.id)
	end

	def destroy
		@schedule = Schedule.find(params[:id])
		@schedule.destroy
		redirect_to schedules_path
	end

	private
	def schedule_params
		params.require(:schedule).permit(:name, :creator, :public_view, :private_view, :creator_id)
	end

end