const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  job_title: {
    type: String
  },
  isBeverageFetcher: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: 'company'
  },
  favorite_order: {
    type: Schema.Types.ObjectId,
    ref: 'order'
  },
  order_history: [{
    type: Schema.Types.ObjectId,
    ref: 'order'
  }]
});

const Employee = mongoose.model('employee', EmployeeSchema);

module.exports = Employee;
