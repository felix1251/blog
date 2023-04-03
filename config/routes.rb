Rails.application.routes.draw do
  root 'home#index'

  resources :projects
  resources :blogs
  
  devise_for :users, :path => '', :path_names => { :sign_in => "admin/login", :sign_out => "logout" }

  match "/404", to: "errors#not_found", via: :all
  match "/500", to: "errors#internal_server_error", via: :all
end
