Rails.application.routes.draw do
  devise_for :users
  get '/products', to: 'products#all_products'
  get '/categories', to: 'category#all_categories'
  
end
