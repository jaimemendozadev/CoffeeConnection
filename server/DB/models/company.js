const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: {
    type: String
  }
  //to be added as needed.
});

const Company = mongoose.model('company', CompanySchema);

module.exports = Company;
