const express = require("express");
const router = new express.Router();
const PunkAPIWrapper = require("punkapi-javascript-wrapper");
const punkAPI = new PunkAPIWrapper();

router.get("/beers", (req, res) => {
  punkAPI
    .getBeers()
    .then(apiRes => {
      console.log(apiRes);
      // res.json(apiRes);
      res.render("beers", { beers: apiRes });
    })
    .catch(apiErr => {
      console.log(apiErr);
    });
});

// router.get("/random-beers", (req, res) => {
//   res.send("on the random beer route");
// });

module.exports = router;
