Rails.application.routes.draw do
  root 'pages#index'

  resources :persons, only: :create
end
