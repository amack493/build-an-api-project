const mongoose = require("../db/connection");

const cardSchema = new mongoose.Schema({
    name: String,
    type: String,
    cost: Number,
    atk: Number,
    hp: Number,
    rarity: String
})

module.exports = mongoose.model("Card", cardSchema);