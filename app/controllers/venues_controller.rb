class VenuesController < ApplicationController

	def index
		@venues = Venue.all
		respond_to do |format|
			format.json { render :json => @venues }
		end
	end

	def top_venues
		@venues = Venue.all.sort_by { |venue| venue.popularity_rating }
		@venues.reverse!
		render json: @venues[0..4]
	end

	private
	# params.require(:venue).permit(:name, :street, :city, :state, :country, :latitude, :longitude, :popularity_rating)
	def venue_params
		params.require(:venue).permit(:name, :street, :city, :state, :country, :latitude, :longitude, :popularity_rating)
	end

end