class UsersController < ApplicationController

	before_action :authorize, only: [:edit, :update, :destroy]

	def index
		@users = User.all
	end

	def show
		@user = User.find(params[:id])
	end

	def new
		@user = User.new
	end

	def create
		@user = User.new(user_params)
		if @user.save
			redirect_to root_path
		else
			render :new
		end
	end

	def edit
		@user = User.find(params[:id])
	end

	def update
		@user = User.find(params[:id])
		@user.update(user_params)
		redirect_to root_path
	end

	def destroy
		@user = User.find(params[:id])
		@user.destroy
		redirect_to root_path
	end

	def home
		@user = current_user
	end

	private
	def user_params
		params.require(:user).permit(:first_name, :last_name, :gender, :age, :zip_code, :street_address, :city, :state, :interest, :username, :email, :profile_type, :telephone_number, :password, :password_confirmation, :image)
	end

end