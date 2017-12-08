const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  ordered_by: {
    type: Schema.types.ObjectId,
    ref: 'employee'
  },
  drink: {
    type: Schema.types.ObjectId,
    ref: 'drink'
  },
  selected_size: String,
  selected_milk: String,
  other_options: String
});

const Order = mongoose.model('order', OrderSchema);

module.exports = Order;
