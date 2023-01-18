const express = require("express");
const app = express();


// ℹ️ Connects to the database
require("./db/index");


app.use(express.json()); 
app.use("/api", require("./routes/artikel.routes"));

module.exports = app;