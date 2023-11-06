# Getting started with Expense Tracker!

1. Clone the project locally
2. Make sure to have [node](https://nodejs.org/en/download/) version >= 10x installed in your local environment

## MongoDB

1. Ensure you have MongoDB installed. You can follow the steps here for Mac Os:(https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)
2. As this project uses a locally run service, scroll down to "Run MongoDB Commmunity Edition" instructions and make sure to run so that your project can connect to the database.

## Backend

1. cd into the back-end/ directory and run `npm install` to install all the backend dependencies
2. Create a .env file: `expense_tracker/back-end/.env`, and add your preferred port and MONGODB_URI. For example...

```
MONGODB_URI=mongodb://localhost:27017/expense-tracker
PORT=8080
```


3. From the back-end/ directory, run `npm run start` to start the server on port 8080 and create a connection to the database.

## Frontend

1. cd into the front-end/ directory and run `npm install` to install all the frontend dependencies
2. From the front-end/ directory, run `npm run start` to start the app in development mode on port 3000
3. If you aren't automatically directed to the app running on your browswer, navigate to [http://localhost:3000](http://localhost:3000) to interact with the app