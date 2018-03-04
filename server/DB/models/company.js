const mongoose = require('mongoose')
const { Schema } = mongoose

const CompanySchema = new Schema({
  name: {
    type: String,
    required: true,
    text: true,
    trim: true
  },
  employees: [{
    type: Schema.Types.ObjectId,
    ref: 'employee'
  }],
  teams: [{
    type: Schema.Types.ObjectId,
    ref: 'team'
  }],
  order_list_history: [{
    type: Schema.Types.ObjectId,
    ref: 'orderList'
  }]
})

module.exports = mongoose.model('company', CompanySchema)
