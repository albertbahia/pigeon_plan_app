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
			redirect_to schedule_path(@schedule.id)
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
	end

	private
	def schedule_params
		params.require(:schedule).permit(:name, :creator, :public_view, :private_view)
	end

end