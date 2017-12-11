const mongoose = require('mongoose');
const { Schema } = mongoose;

const StoreSchema = new Schema({
  name: String,
  drinks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'drink'
    }
  ]
});

const Store = mongoose.model('store', StoreSchema);

module.exports = Store;
