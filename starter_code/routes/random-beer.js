const express = require("express");
const router = new express.Router();
const PunkAPIWrapper = require("punkapi-javascript-wrapper");
const punkAPI = new PunkAPIWrapper();

router.get("/random-beers", (req, res) => {
  punkAPI
    .getRandom()
    .then(beers => {
      res.render("random-beer", { beers: beers });
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
