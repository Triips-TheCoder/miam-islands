Rails.application.routes.draw do
  devise_for :people
  root "home#index"
  # root to: "home#index"
  resources :recipes
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
