Rails.application.routes.draw do
  root 'home#index'
  devise_for :users, :path => '/admin', :path_names => { :sign_in => "login" }

  resources :blogs
  resources :projects
  resources :about

  # The priority is based upon order of creation:

  match "/404", to: "errors#not_found", via: :all
  match "/500", to: "errors#internal_server_error", via: :all

end
