source 'https://rubygems.org'

ruby '2.3.1'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.0'
gem 'puma', '~> 3.12'

# Styles gems
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'jquery-rails'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'

# Deploy
gem 'mina'

# facebook
gem 'koala', '~> 2.2'

# cron jobs
gem 'whenever'

# Lato gems
gem 'lato_core', git: 'https://github.com/LatoTeam/lato_core.git'
gem 'lato_view', git: 'https://github.com/LatoTeam/lato_view.git'

group :development, :test do
  # database
  gem 'sqlite3'
end

# Development gems
group :development do
  # develop
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  # testing
  gem 'better_errors'
  gem 'byebug', platform: :mri
  gem 'faker'
  # console
  gem 'colorize'
  gem 'table_print'
  gem 'web-console' # using <%= console %> anywhere in the code.
end

# Production gems
group :production do
  # database
  gem 'pg'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
