Rails.application.routes.draw do
  root to: 'application#main'
  resources :users
  get '/home' => 'users#home', as: 'user_home'
  resources :schedules
  resources :events
  resources :venues
  get '/top_venues' => 'venues#top_venues', as: 'top_venues'

  # ---Sessions---
  get '/login' => 'sessions#new'
  post '/sessions' => 'sessions#create'
  get '/logout' => 'sessions#destroy'
  get '/error' => 'sessions#error'
end
