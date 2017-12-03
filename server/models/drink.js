const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DrinkSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String
  },
  store: {
    type: Schema.Types.ObjectId,
    ref: 'store'
  },
  ingredients: [
    {
      type: Schema.Types.ObjectId,
      ref: 'ingredient'
    }
  ],
  options: {
    type: String
  }
});

const Drink = mongoose.model('drink', DrinkSchema);

module.exports = Drink;
