# Salvinipsum

Trash random facebook posts generator.

Try it here: http://gregoriogalante.com/salvinipsum

## Server

Ruby on Rails application, API requests to Facebook developed using Koala gem, admin panel developed using Lato gem.

To start the server run:

```console

bundle install

rails db:migrate

rails s

```

## Client

React.js application, API requests to server developed with Axios, assets compiled with Webpack.

To start the client run:

```console

npm install

npm run start

```

To compile the client run:

```console

npm run build

```