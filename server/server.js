const express = require("express");
const app = express();



const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/artikel';




// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 5000;

app.get("/api", (req, res) => {
  
    res.json("App is online");    
})

app.listen( PORT, () => {console.log(`Server started on port ${PORT}`)})