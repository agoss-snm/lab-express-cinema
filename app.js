
require('dotenv/config');
require('./db');
const express = require('express');
const hbs = require('hbs');
const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app);

// default value for title local
const projectName = 'Cinema Ironhack';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}`;

// 👇 Start handling routes here
const index = require('./routes/index');
app.use('/', index);

const moviesRoutes = require("./routes/movies"); // <== import (require) movies routes
app.use("/", moviesRoutes); // <== use movies routes


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;
