Rails.application.routes.draw do
  resources :users
  resources :schedules
  resources :events
end
