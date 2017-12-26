# Salvinipsum

Trash random facebook posts generator.

Try the user interface here: https://salvinipsum.herokuapp.com

## Api

Every endpoint has this structure:

```text
https://salvinipsum.herokuapp.com/api/ipsum/text/USER_KEY/POST_LENGTH
```

- **USER_KEY**: The key used to select a persion (salvini, morandi, mentana ecc.). You can select multiple users using a dash char between the user keys (for example "salvini-morandi").
- **POST_LENGTH**: The number of words for the post.

An endpoint example is:

```text
https://salvinipsum.herokuapp.com/api/ipsum/text/salvini/100
```

## Development

### Server

Ruby on Rails application, API requests to Facebook developed using Koala gem, admin panel developed using Lato gem, compiled code of the web app.

To start the server run:

```console

bundle install

rails db:migrate

rails s

```

### Webapp

React.js application, API requests to server developed with Axios, assets compiled with Webpack.

To start the client run:

```console

npm install

npm run start:dev

```

To compile the client and copy it on server public path run:

```console

npm run build

```