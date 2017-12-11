const mongoose = require('mongoose');
const { Schema } = mongoose;

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
  other_options: String,
  created_at: { type: Date, default: Date.now },
});

const Order = mongoose.model('order', OrderSchema);

module.exports = Order;
