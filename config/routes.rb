Rails.application.routes.draw do
  root 'pages#index'

  resources :persons, only: [:create] do
    collection do
      get :info
    end
  end
end
