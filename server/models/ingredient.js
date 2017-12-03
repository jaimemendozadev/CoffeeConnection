const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
  name: String
  // to be added (such as quantity, size etc)
});

const Ingredient = mongoose.model('ingredient', IngredientSchema);

module.exports = Ingredient;
