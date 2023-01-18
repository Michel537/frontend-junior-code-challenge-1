// Importing model
const Artikel = require("../models/Artikel.model");

// Router
const router = require("express").Router();

// Getting a list of all the articles we have in our DB
router.get("/artikel", (req, res, next) => {

    Artikel.find()
    .then( artikelFromDB => {
        res.status(200).json({artikelFromDB})
    })
    .catch( err => {
        console.log("error getting Artikel from DB", err);
        next(err);
    })
})

// Gettin an Artikel with his ID
router.get("/artikel/:artikelId", (req, res, next) => {

    const id = req.params.artikelId;

    Artikel.findById(id)
    .then( artikelDetails => {
        res.status(200).json({artikelDetails});
    })
    .catch( err => {
        console.log("Read: Error getting artikel details from DB", err);
        next();
    })
});

// Creating a new Artikel
router.post("/artikel/", (req, res, next) =>{             

    const {Hauptartikelnr, Artikelname, Hersteller, Beschreibung, Materialangaben, Geschlecht, Produktart, Ärmel, Bein, Kragen, Herstellung, Taschenart, Grammatur, Material, Ursprungsland, Bildname } = req.body;   

    Artikel.create( {Hauptartikelnr, Artikelname, Hersteller, Beschreibung, Materialangaben, Geschlecht, Produktart, Ärmel, Bein, Kragen, Herstellung, Taschenart, Grammatur, Material, Ursprungsland, Bildname } )
    .then( artikel => {
        res.status(200).json(artikel)
    })
    .catch(err => res.json(err)); 

} )

// Modifying an Artikel with his ID
router.put("/artikel/:artikelId",  (req, res, next) => {    

    const artikelId = req.params.artikelId;   

    const {Hauptartikelnr, Artikelname, Hersteller, Beschreibung, Materialangaben, Geschlecht, Produktart, Ärmel, Bein, Kragen, Herstellung, Taschenart, Grammatur, Material, Ursprungsland, Bildname } = req.body;

    Artikel.findByIdAndUpdate( artikelId, {Hauptartikelnr, Artikelname, Hersteller, Beschreibung, Materialangaben, Geschlecht, Produktart, Ärmel, Bein, Kragen, Herstellung, Taschenart, Grammatur, Material, Ursprungsland, Bildname } )
    .then( updatedArtikel => {
        res.status(200).json(updatedArtikel)
    })
    .catch(err => res.json(err)); 

} )

router.delete("/artikel/:artikelId", (req, res, next) => {   
      
    artikelId = req.params.artikelId;    
    

    Artikel.findByIdAndDelete( artikelId )
    .then( deletedArtikel => {
        res.status(200).json(deletedArtikel)
    })
    .catch(err => res.json(err)); 

} )


module.exports = router;