const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DrinkSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  size: [],
  store: {
    type: Schema.Types.ObjectId,
    ref: 'store'
  },
  ingredients: [],
  image_url: {
    type: String
  },
  options: {
    type: String
  }
});

/**********************************************
 *Temporarily amending schema for simplification
 ***********************************************
  size: {
    type: String
  },

  ingredients: [
    {
      type: Schema.Types.ObjectId,
      ref: 'ingredient'
    }
  ],
*/



const Drink = mongoose.model('drink', DrinkSchema);

module.exports = Drink;
