const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  ordered_by: {
    type: Schema.types.ObjectId,
    ref: 'employee'
  },
  drinks: [
    {
      type: Schema.types.ObjectId,
      ref: 'drink'
    }
  ]
});

const Order = mongoose.model('order', OrderSchema);

module.exports = Order;
