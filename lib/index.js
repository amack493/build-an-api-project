const express = require("express");
const app = express();
const parser = require("body-parser");
const Cards = require("./models/cards");

app.use(parser.json());

app.get("/", (req, res) => {
  Cards.find({}).then(cards => {
    res.json(cards);
  });
});

app.get("/cards/:id", (req, res) => {
  Cards.findById(req.params.id).then(cards => {
    res.json(cards);
  });
});

app.get("/name/:name", (req, res) => {
  Cards.find({ name: req.params.name }).then(cards => {
    res.json(cards);
  });
});

app.get("/colors/:colors", (req, res) => {
  Cards.find({ colors: req.params.colors }).then(cards => {
    res.json(cards);
  });
});

app.get("/types/:types", (req, res) => {
  Cards.find({ types: req.params.types }).then(cards => {
    res.json(cards);
  });
});

app.get("/rarity/:rarity", (req, res) => {
  Cards.find({ rarity: req.params.rarity }).then(cards => {
    res.json(cards);
  });
});

app.put("/cards/:id", function(req, res) {
  Cards.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
    cards => {
      res.json(cards);
    }
  );
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

app.set("port", process.env.PORT || 8080);


app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});