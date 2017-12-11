const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema({
  ordered_by: {
    type: Schema.Types.ObjectId,
    ref: 'employee'
  },
  drink: {
    type: Schema.Types.ObjectId,
    ref: 'drink'
  },
  selected_size: String,
  selected_milk: String,
  other_options: String,
  created_at: { type: Date, default: Date.now },
});

mongoose.model('order', OrderSchema);