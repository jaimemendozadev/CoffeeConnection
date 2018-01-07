const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderListSchema = new Schema({
  team: {
    type: Schema.Types.ObjectId,
    ref: 'team'
  },
  date: { type: Date, default: Date.now },
  orders: [{
      type: Schema.Types.ObjectId,
      ref: 'order'
  }]
});

mongoose.model('orderList', OrderListSchema);