# Star Wars API

A NodeJS API for swapi.co - the Star Wars API.

Improvements to do:
- Improve the architecture of the server
- Logging
- Testing

## Endpoints 

#### /people
#### /people/?sortBy={mass|height|name}

Return all people, and has an optional query param "sortBy" that allows you to sort by 'name', 'height', or 'mass'.

#### /planets

Return all planets.

## Server run

In the root of the project, you can run the server in dev mode with the following commands:

~~~bash
cp .env.example .env
npm install
npm start
~~~
