class SchedulesController < ApplicationController

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
	def schedule_params
		params.require(:schedule).permit(:name, :creator, :public, :private)
	end

end