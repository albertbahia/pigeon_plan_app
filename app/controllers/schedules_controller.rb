class SchedulesController < ApplicationController

	def index
	end

	def show
		@schedule = Schedule.find(params[:id])
	end

	def new
		@schedule = Schedule.new
	end

	def create
		@schedule = Schedule.new(schedule_params)
		if @schedule.save
			redirect_to users_path
		else
			render :new
		end
	end

	def edit
	end

	def update
	end

	def destroy
	end

	private
	def schedule_params
		params.require(:schedule).permit(:name, :creator, :public, :private)
	end

end