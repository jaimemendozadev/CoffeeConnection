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
  companies: [{
    type: Schema.Types.ObjectId,
    ref: 'company'
  }],
  favorite_drinks: [{
    type: Schema.Types.ObjectId,
    ref: 'drink'
  }]
});

const Employee = mongoose.model('employee', EmployeeSchema);

module.exports = Employee;
