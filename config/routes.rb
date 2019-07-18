Rails.application.routes.draw do
  # get 'messages/index' => 'messages#index'
  resources :messages, only: [:index]
end
