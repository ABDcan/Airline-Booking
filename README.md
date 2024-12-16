# Welcome to Flights Service

## Project Setup
- clone the project on your local
- Execute `npm i' on the same path as of your root directory of the downloaded project
-Create a `.env` file in the root directory and add the following enivorment variable
 - `PORT = 3000`
 - Inside the `src/config` folder create a new file `config.json` and then add the following piece of json
 ```
 {
    "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <Your_DB_Password>,
    "database": "flights_search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
 }
 ```

 - Once you'hc added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and execute `npx sequelize db:migrate` 

## DB Design
    - Airplane Table
        -id
        -model number
        -capacity
        -created-at
        -updated-at
    - Flight
        -id
        -src_airport_id
        -destination_airport_id
        -departue
        -arrival
        -Flight number  
    - Airport
        -id
        -name
        -city_id
        -address 
    - City
        -id
        -name
-A flight belongs to an airplane but one airplane can be used in multiple flights
-A city has many airports but airport belongs to a city
-One airport can have many flights, but a flight belongs to one airport

## FLights Table

### City -> id, name, created_at, updated_at
### Airport -> id, name,address, city_id, created_at, updated_at
 Relationship - City has many airports and Airport belongs to a city(one to many)


