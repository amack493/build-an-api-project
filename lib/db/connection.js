const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cards", { useNewUrlParser: true });
module.exports = mongoose;
