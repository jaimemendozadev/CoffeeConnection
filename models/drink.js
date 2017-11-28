const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DrinkSchema = new Schema({
  drink_name: {
    type: String
  }
  //to be added more below
});

const Drink = mongoose.model('drink', DrinkSchema);

module.exports = Drink;
