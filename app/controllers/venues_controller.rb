class VenuesController < ApplicationController

	def index
		@venues = Venue.all
	end

	def top_venues
		@venues = Venue.all.sort_by { |venue| venue.popularity_rating }
		@venues.reverse!
	end

	private
	# params.require(:venue).permit(:name, :street, :city, :state, :country, :latitude, :longitude, :popularity_rating)
	def venue_params
		params.require(:venue).permit(:name, :street, :city, :state, :country, :latitude, :longitude, :popularity_rating)
	end

end