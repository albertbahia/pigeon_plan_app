Rails.application.routes.draw do
  root to: 'application#index'
  resources :users
  resources :schedules
  resources :events
end
