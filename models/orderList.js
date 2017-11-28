const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderListSchema = new Schema({
  company: {
    type: Schema.Types.ObjectId,
    ref: 'company'
  },
  date: { type : Date, default: Date.now },
  orders: [{
    type: Schema.Types.ObjectId,
    ref: 'order'
  }]
});

const OrderList = mongoose.model('orderList', OrderListSchema);

module.exports = OrderList;
