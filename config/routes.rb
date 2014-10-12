Rails.application.routes.draw do
  root to: 'application#index'
  resources :users
  resources :schedules
  resources :events

  # ---Sessions---
  get '/login' => 'sessions#new'
  post '/sessions' => 'sessions#create'
  get '/logout' => 'sessions#destroy'
  get '/error' => 'sessions#error'
end
