const Cards = require("../models/cards");
const data = require("./cards.json");

const cardData = data.cards.map(item => {
  const cards = {};
  cards.name = item.name;
  cards.manaCost = item.manaCost;
  cards.colors = item.colors;
  cards.type = item.type;
  cards.set = item.set;
  cards.text = item.text;
  cards.number = item.number;
  cards.power = item.power;
  cards.toughness = item.toughness;
  return cards;
});
console.log(cardData);
Cards.remove({}).then(() => {
  Cards.create(cardData)
    .then(cards => {
      console.log(cards);
    })
    .catch(err => {
      console.log(err);
    });
});
