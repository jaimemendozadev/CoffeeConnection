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
  }]
});

mongoose.model('team', TeamSchema);
