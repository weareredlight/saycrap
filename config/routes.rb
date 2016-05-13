Rails.application.routes.draw do
  resources :craps
  root 'application#root_page'
end
