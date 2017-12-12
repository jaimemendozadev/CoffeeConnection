const mongoose = require('mongoose');
const { Schema } = mongoose;

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

mongoose.model('drink', DrinkSchema);