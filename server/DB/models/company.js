const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: {
    type: String,
    required: true,
    text: true,
    trim: true
  },
  employees: [
    {
      type: Schema.Types.ObjectId,
      ref: 'employee'
    }
  ],
  beverage_fetcher: {
    type: Schema.Types.ObjectId,
    ref: 'employee'
  }
});

const Company = mongoose.model('company', CompanySchema);

module.exports = Company;
