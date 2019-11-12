const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path");

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname, "public")));

hbs.registerPartials(__dirname + "/views/partials");

const beerRouter = require("./routes/beers");
app.use(beerRouter);

const randombeerRouter = require("./routes/random-beer");
app.use(randombeerRouter);

app.get("/", (req, res, next) => {
  res.render("index", { css: ["styles"] });
});

app.listen(3000);
