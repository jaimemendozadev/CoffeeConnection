const mongoose = require('mongoose');
const { Schema } = mongoose;

const CompanySchema = new Schema({
  name: {
    type: String,
    required: true,
    text: true,
    trim: true
  },
  teams: [{
      type: Schema.Types.ObjectId,
      ref: 'team'
  }]
});

mongoose.model('company', CompanySchema);
