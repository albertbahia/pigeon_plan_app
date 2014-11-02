class VenuesController < ApplicationController

	def index
	end

	def show
	end

	def create
	end

	def new
	end

	def update
	end

	def edit
	end

	def destroy
	end

	private
	def venue_params
		params.require(:venue).permit(:name, :street, :city, :state, :latitude, :longitude)
	end

end