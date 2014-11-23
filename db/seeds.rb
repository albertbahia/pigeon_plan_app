
# -------User seed data---------
first_names = ['sheldon', 'leonard', 'penny', 'howard', 'raj', 'amy', 'bernadette']

last_names = ['cooper', 'hoffstadter', 'wolowitz', 'koot', 'farrafowler']

genders = ['male', 'female']

ages = [20, 21, 22, 23, 24, 25]

zip_codes = ['07039', '07052', '07086']

street_addresses = ['21 Main Ave', '23 International Plaza', '34 National Street']

cities = ['Chicago', 'New York City', 'Los Angeles', 'Austin', "Boulder"]

states = ['NJ', 'NY', 'MD', 'CA', 'TX']

interests = ['bars', 'festivals', 'concerts']

usernames = ['superhero', 'batman', 'flash', 'green_lantern']

emails = ['sheldon@cooper.com', 'leonard@hoffstadter.com', 'penny@penny.com', 'howard@wolowitz.com', 'rag@kooth.com', 'amy@farra.com', 'bernadette@berny.com']

profile_types = ['business', 'normal']

first_names.each do |first_name|
	User.create({
		first_name: first_name,
		last_name: last_names.sample,
		gender: genders.sample,
		age: ages.sample,
		zip_code: zip_codes.sample,
		street_address: street_addresses.sample,
		city: cities.sample,
		state: states.sample,
		interest: interests.sample,
		username: usernames.sample,
		email: emails.sample,
		profile_type: profile_types.sample,
		password: '123',
		password_confirmation: '123'
	})
end

# --------------------------------

# ---Events seed data-------------
names = ['Fall Festival', 'Jay-Z Concert', 'Annual Bar Crawl', 'Oktoberfest']

creators = ['penny', 'sheldon', 'leonard', 'raj']

numbers_in_attendance = [23, 1000, 50, 25, 30000, 400]

prices = [50, 25, 35, 10, 20]

venue_names = ['Roxbury', 'Abicus', 'Oculus', 'Steakness House', 'Boathouse', 'Stage 4', 'Five Star']

durations = [2, 4, 6, 8, 10]

types = ['concert', 'conference', 'birthday', 'business launch']

calendar_dates = ['January 20, 2015', 'December 20, 2014', 'November 10, 2014', 'February 1, 2015']

host_names = ['John McK', 'MC Dominic', 'MC Sheldon', 'MC Leonard', 'MC Raj', 'MC wolowitz']

names.each do |name|
	Event.create({
		name: name,
		creator: creators.sample,
		number_in_attendance: numbers_in_attendance.sample,
		price: prices.sample,
		venue_name: venue_names.sample,
		duration: durations.sample,
		event_type: types.sample,
		calendar_date: calendar_dates.sample,
		host_name: host_names.sample,
		number_males_attending: numbers_in_attendance.sample,
		number_females_attending: numbers_in_attendance.sample,
		street_address: street_addresses.sample,
		city: cities.sample,
		state: states.sample,
		zip_code: zip_codes.sample
	})
end

popularity_ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

venue_names.each do |venue_name|
	Venue.create({
		name: venue_name,
		street: street_addresses.sample,
		city: cities.sample,
		state: states.sample,
		country: 'USA',
		latitude: 00000,
		longitude: 000000,
		popularity_rating: popularity_ratings.sample
	})
end

