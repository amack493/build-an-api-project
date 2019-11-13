const express = require("express");
const app = express();
const parser = require("body-parser");
const Cards = require("./models/cards");

app.use(parser.json());

app.get("/cards", (req, res) => {
  Cards.find({}).then(cards => {
    res.json(cards);
  });
});

app.get("/cards/:id", (req, res) => {
  Cards.findById(req.params.id).then(cards => {
    res.json(cards);
  });
});

app.get("/cards/name/:name", (req, res) => {
  Cards.find({ name: req.params.name }).then(cards => {
    res.json(cards);
  });
});

app.post("/cards", (req, res) => {
  Cards.create(req.body).then(cards => {
    res.json(cards);
  });
});

app.delete("/cards/:id", (req, res) => {
  Cards.findOneAndRemove({ _id: req.params.id }).then(cards => {
    res.json(cards);
  });
});

app.listen(3006, () => console.log("Ayyye, I see you! ;)"));
