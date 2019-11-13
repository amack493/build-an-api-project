const fs = require("fs");
const fetch = require("node-fetch");
const url = "https://api.magicthegathering.io/v1/cards";

fetch(url)
  .then(res => res.json())
  .then(res => {
    console.log(res);
    let cards = JSON.stringify(res);
    fs.writeFile("./db/cards.json", cards, err => {
      if (err) {
        console.log(err);
      } else {
        console.log("Yus!");
      }
    });
  });
