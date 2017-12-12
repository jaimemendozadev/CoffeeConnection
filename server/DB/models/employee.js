const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    trim: true
  },
  last_name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  job_title: {
    type: String
  },
  is_beverage_fetcher: {
    type: Boolean,
    default: false
  },
  is_admin: {
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
  order_history: [
    {
      type: Schema.Types.ObjectId,
      ref: 'order'
    }
  ],
  updated_at: Date,
  created_at: Date
}, { runSettersOnQuery: true });

EmployeeSchema.virtual('full_name').get(function() {
  return `${this.first_name} ${this.last_name}`;
});

EmployeeSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;
  if (!this.created_at) {
    this.created_at = currentDate;
  }
  next();
});

const Employee = mongoose.model('employee', EmployeeSchema);

module.exports = Employee;
