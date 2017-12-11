const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderListSchema = new Schema({
  company: {
    type: Schema.Types.ObjectId,
    ref: 'company'
  },
  date: { type: Date, default: Date.now },
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: 'order'
    }
  ]
});

mongoose.model('orderList', OrderListSchema);