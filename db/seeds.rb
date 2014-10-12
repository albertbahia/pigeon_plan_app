
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




