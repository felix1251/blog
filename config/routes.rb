Rails.application.routes.draw do
  root 'home#index'

  resources :projects
  resources :blogs
  devise_for :users

  match "/404", to: "errors#not_found", via: :all
  match "/500", to: "errors#internal_server_error", via: :all
end
