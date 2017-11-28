const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const IngredientSchema = require('./ingredient');

const DrinkSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String
  },
  created_by: {  //company where you get the drink from
    type: String
  },
  ingredients: [IngredientSchema], 
  options: {
    type: String
  }
});

const Drink = mongoose.model('drink', DrinkSchema);

module.exports = Drink;
