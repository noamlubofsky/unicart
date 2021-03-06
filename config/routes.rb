Rails.application.routes.draw do
  resources :shipping_infos
  resources :account_infos
  resources :payment_infos
  resources :cart_items
  resources :reviews, only: [:show, :create]
  resources :products, only: [:show, :index]
  # resources :categories
  resources :shopping_carts
  resources :stores, only: [:show, :index]
  resources :users, only: [:show, :create]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  delete "/clear", to: "cart_items#clear"
  get "/related/:category", to: "products#related"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
