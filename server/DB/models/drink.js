const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DrinkSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  store: {
      type: Schema.Types.ObjectId,
      ref: 'store'
  },
  available_sizes: [],
  milk_options: [],
  image_url: {
    type: String
  }
});

const Drink = mongoose.model('drink', DrinkSchema);

module.exports = Drink;
