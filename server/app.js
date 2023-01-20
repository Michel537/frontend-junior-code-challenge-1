// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();
// ℹ️ Connects to the database
require("./db/index");
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// Routes here
app.use("/api", require("./routes/artikel.routes"));

module.exports = app;
