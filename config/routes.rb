Rails.application.routes.draw do
  root 'home#index'

  resources :projects
  resources :blogs
  
  devise_for :users, :path => '/admin', :path_names => { :sign_in => "login" }

  match "/404", to: "errors#not_found", via: :all
  match "/500", to: "errors#internal_server_error", via: :all

  get '/moon', to: 'application#moon', as: 'moon'
  get '/sun', to: 'application#sun', as: 'sun'
  
end
