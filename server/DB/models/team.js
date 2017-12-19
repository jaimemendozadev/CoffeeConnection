const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const TeamSchema = new Schema({
  name: {
    type: String,
    required: true,
    text: true,
    trim: true
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: 'company'
  },
  team_members: [{
    type: Schema.Types.ObjectId,
    ref: 'employee'
  }],
  beverage_fetchers: [{
    type: Schema.Types.ObjectId,
    ref: 'employee'
  }],
  order_history: [{
    type: Schema.Types.ObjectId,
    ref: 'order'
  }]
});

mongoose.model('team', TeamSchema);
