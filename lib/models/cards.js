const mongoose = require("../db/connection");

const cardsSchema = new mongoose.Schema({
    name: String,
   manaCost: String,
   colors: [String],
   type: String,
   rarity: String,
   set: String,
   text: String,
   number: String,
   power: String,
   toughness: String
})

module.exports = mongoose.model("Cards", cardsSchema);