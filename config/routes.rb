Rails.application.routes.draw do

  root 'application#index'

  get 'login', to: 'lato/lato#dashboard', as: 'login'

  # Admin routes
  namespace :lato do
    # dashboard
    get 'dashboard', to: 'lato#dashboard', as: 'dashboard'

    resources :phrases, only: [:edit, :update, :destroy, :show, :index]
    get 'phrases_extra/check_page/:page', to: 'phrases#check_page', as: 'check_phrases_page'
    get 'phrases_extra/destroy_not_checked', to: 'phrases#destroy_not_checked', as: 'destroy_not_checked_phrases'

    resources :profiles
    delete 'profiles/delete_picture/:id', to: 'profiles#delete_picture', as: 'delete_profile_picture'

    get 'update_feeds/:id', to: 'profiles#feeds', as: 'update_feeds'
  end

  # Api routes
  namespace :api do
    get 'ipsum/text/:keys/:words', to: 'ipsum#text'
    get 'profiles/all', to: 'profiles#all'
    get 'profiles/:id', to: 'profiles#single'
  end

end
