const mongoose = require("mongoose");

const CatSchema = mongoose.Schema({
    name: String
})

const Cat = mongoose.model("Cat", CatSchema);

module.exports = { Cat };