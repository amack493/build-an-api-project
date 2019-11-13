const mongoose = require("../db/connection");

const cardsSchema = new mongoose.Schema({
    name: String,
    type: String,
    cost: Number,
    atk: Number,
    hp: Number,
    rarity: String
})

module.exports = mongoose.model("Cards", cardsSchema);