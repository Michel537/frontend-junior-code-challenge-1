const mongoose = require('mongoose');
const Artikel = require('../models/Artikel.model');

// fs modul for working with files 
const fs = require("fs");

var csvjson = require('csvjson');

var path = require('path');


var data = fs.readFileSync("../Artikel.csv", { encoding : 'utf8'});

var options = {
    delimiter : ';', 
    quote     : '"' 
  };

 const arrayData = csvjson.toObject(data, options);  
  

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/artikel';

// Connecting to mongoDb and creting the objects of our JSON file on our database

mongoose
.connect(MONGO_URI)
.then((x) => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  return Artikel.create(arrayData);
})
.then(itemsFromDB => {
  console.log(`Created ${arrayData.length} artikel`);

  //close DB
  return mongoose.connection.close();

})
.then(() => {
  console.log('DB connection closed');
})
.catch((err) => {
  console.error("Error connecting to mongo: ", err);
});










