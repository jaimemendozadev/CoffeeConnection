const bcrypt = require('bcrypt-nodejs')
const mongoose = require('mongoose')
const { Schema } = mongoose

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
  beverage_fetchers: [{
    type: Boolean,
    default: false
  }],
  admins: [{
    type: Schema.Types.ObjectId,
    ref: 'company'
  }],
  companies: [{
    type: Schema.Types.ObjectId,
    ref: 'company'
  }],
  favorite_order: {
    type: Schema.Types.ObjectId,
    ref: 'order'
  },
  order_history: [{
    type: Schema.Types.ObjectId,
    ref: 'order'
  }],
  updated_at: Date,
  created_at: Date
}, { runSettersOnQuery: true })

EmployeeSchema.virtual('full_name').get(function () {
  return `${this.first_name} ${this.last_name}`
})

EmployeeSchema.pre('save', function (next) {
  const employee = this
  if (!employee.isModified('password')) { return next() }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err) }
    bcrypt.hash(employee.password, salt, null, (err, hash) => {
      if (err) { return next(err) }
      employee.password = hash

      var currentDate = new Date()
      employee.updated_at = currentDate
      if (!employee.created_at) {
        employee.created_at = currentDate
      }
      next()
    })
  })
})

EmployeeSchema.methods.comparePassword = function comparePassword (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch)
  })
}

module.exports = mongoose.model('employee', EmployeeSchema)
