require('dotenv').load();

const casual = require('casual');
const fs = require('fs');
const path = require('path');

const drinks = require('./Drink.json');

const Company = require('../server/DB/models/company.js');
const Drink = require('../server/DB/models/drink.js');
const Employee = require('../server/DB/models/employee.js');
const Store = require('../server/DB/models/store.js');



const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongoDB = process.env.DB_URL;

mongoose.connect(mongoDB);
const db = mongoose.connection;


const jobTitles = [
  'Account Executive',
  'Administrative Assistant',
  'Administrative Manager',
  'Branch Manager',
  'Business Analyst',
  'Business Manager',
  'Chief Executive Officer',
  'Office Manager',
  'Operations Manager',
  'Quality Control Coordinator',
  'Risk Manager',
  'Service Representative',
  'Accounts Receivable/Payable Specialist',
  'Assessor',
  'Auditor',
  'Bookkeeper',
  'Budget Analyst',
  'Cash Manager',
  'Chief Financial Officer',
  'Controller',
  'Benefits Officer',
  'Compensation Analyst',
  'Employee Relations Specialist',
  'HR Coordinator',
  'HR Specialist',
  'Retirement Plan Counselor',
  'Staffing Consultant',
  'Union Organizer',
  'Business Systems Analyst',
  'Content Manager',
  'Content Strategist',
  'Database Administrator',
  'Digital Marketing Manager',
  'Full Stack Developer',
  'Information Architect',
  'Marketing Technologist',
  'Mobile Developer',
  'Project Manager',
  'Social Media Manager',
  'Software Engineer',
  'Systems Engineer',
  'Software Developer',
  'Systems Administrator',
  'User Interface Specialist',
  'Web Analytics Developer',
  'Web Developer',
  'Webmaster'
];


function sanitizeCompanyName(company) {  
  let newCompanyName = company.replace(/\s+/, '_').toLowerCase();
  return newCompanyName;
}

function generateRandomJob() {
  let randomIdx = Math.floor(Math.random() * jobTitles.length);
  return jobTitles[randomIdx];
}


function createUsers(companyName) {
  const company = sanitizeCompanyName(companyName);
  const companyEmail = `@${company}.com`;

  let users = [];


  for (var i = 0; i < 20; i++) {
    let first_name = casual.first_name;
    let last_name = casual.last_name;
    let email = `${first_name[0].toLowerCase()}_${last_name.toLowerCase()}${companyEmail}`;
    let job_title = generateRandomJob();
    let isBeverageFetcher = false;

    let newUser = {
      first_name,
      last_name,
      email,
      job_title,
      isBeverageFetcher
    };
    users.push(newUser);
  }

  return users;
}

function initiateDBSeeding() {
  const newCompany = casual.company_name;
  let newUsers = createUsers(newCompany);
  
  let companyP = Company.create({name: newCompany});
  let employeeP = Employee.create(newUsers);
  let drinkP = Drink.create(drinks);

  Promise.all([companyP, employeeP, drinkP]).then(result => {
    console.log('companyP/employeeP/drinkP promises resolved! ');
    closeDB();
  })
    .catch(error => {
      console.log('There was an error resolving the employee/company/drinks promise ', error);

      closeDB();
    });

}

function closeDB() {
  db.close(() => {
    console.log('The connection to the database has been terminated.');
  });
}

function runSeedDBFunc() {
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  db.on('connected', function() {
    console.log('Successfully connected to DB!');
    let companyP = Company.remove({});
    let employeeP = Employee.remove({});
    let drinkP = Drink.remove({});

    Promise.all([companyP, employeeP, drinkP]).then(results => {
      console.log('Company, Employee, Drinks records dropped. ');
      initiateDBSeeding();
    });

  });
}

runSeedDBFunc();