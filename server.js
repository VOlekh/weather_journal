// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
//The project file server.js should require express()
const express = reqyuire ('express');

// Start up an instance of app
//The project file server.js should create an instance of their app using express.
const app = express();

//NOT DEFINED The Express app instance should be pointed to the project folder with .html, .css, and .js files.

/* Middleware*/
//The body-parser package should be installed and included in the project.
const bodyParser = require('body-parser')
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
//The instance of the app should be setup to use cors()
const cors = require('cors');

//NOT AS IT IS NOW The Express app instance should be pointed to the project folder with .html, .css, and .js files.
// Initialize the main project folder
app.use(express.static('website'));





// Spin up the server

// Callback to debug

// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route