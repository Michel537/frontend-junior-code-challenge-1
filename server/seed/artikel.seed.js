const mongoose = require('mongoose');
const Artikel = require('../models/Artikel.model');

// fs modul for working with files and csv parser package from npm 
const fs = require("fs");
const csvParser = require("csv-parser");

const result = [];


// Using createReadStream and csv parser to transform .csv into JSON

fs.createReadStream("../Artikel.csv")
  .pipe(csvParser())
  .on("data", (data) => {
    result.push(data);
  })
  .on("end", () => {
    console.log(result);
  });


  

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/artikel';

// Connecting to mongoDb and creting the objects of our JSON file on our database

mongoose
.connect(MONGO_URI)
.then((x) => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  return Artikel.create(result);
})
.then(itemsFromDB => {
  console.log(`Created ${result.length} artikel`);

  //close DB
  return mongoose.connection.close();

})
.then(() => {
  console.log('DB connection closed');
})
.catch((err) => {
  console.error("Error connecting to mongo: ", err);
});










