const Cards = require ("../models/cards");

Cards.create({
    name:"Leeroy Jenkins",
    type: "Minion",
    cost: 5,
    atk: 6,
    hp: 2,
    rarity: "Legendary"
}).then(() => {
    console.log("Cool!");
    process.exit();
});