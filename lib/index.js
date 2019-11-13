const express = require("express");
const app = express();
const Cards = require("./models/cards");

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

app.listen(3006, () => console.log("Ayyye, I see you! ;)"));
