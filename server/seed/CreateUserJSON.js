const casual = require('casual');
const fs = require('fs');
const path = require('path');

const jobTitles = [
  "Account Executive",
  "Administrative Assistant",
  "Administrative Manager",
  "Branch Manager",
  "Business Analyst",
  "Business Manager",
  "Chief Executive Officer",
  "Office Manager",
  "Operations Manager",
  "Quality Control Coordinator",
  "Risk Manager",
  "Service Representative",
  "Accounts Receivable/Payable Specialist",
  "Assessor",
  "Auditor",
  "Bookkeeper",
  "Budget Analyst",
  "Cash Manager",
  "Chief Financial Officer",
  "Controller",
  "Benefits Officer",
  "Compensation Analyst",
  "Employee Relations Specialist",
  "HR Coordinator",
  "HR Specialist",
  "Retirement Plan Counselor",
  "Staffing Consultant",
  "Union Organizer",
  "Business Systems Analyst",
  "Content Manager",
  "Content Strategist",
  "Database Administrator",
  "Digital Marketing Manager",
  "Full Stack Developer",
  "Information Architect",
  "Marketing Technologist",
  "Mobile Developer",
  "Project Manager",
  "Social Media Manager",
  "Software Engineer",
  "Systems Engineer",
  "Software Developer",
  "Systems Administrator",
  "User Interface Specialist",
  "Web Analytics Developer",
  "Web Developer",
  "Webmaster"
];



function generateCompanyName(){
  let company = casual.company_name;

  company = company.replace(/\s+/, "_").toLowerCase();

  return company;
}

function generateRandomJob(){
  let randomIdx = Math.floor(Math.random() * jobTitles.length);

  return jobTitles[randomIdx];
}




function createUserJSON(){
  const company = generateCompanyName();
  const companyEmail = `@${company}.com`;

  let users = [];


  for (var i = 0; i < 20; i++){
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
    }
    users.push(newUser);
  }

  users = JSON.stringify(users);
  let users_path = path.resolve(__dirname, 'Users.json')

  fs.writeFile(users_path, users, 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

createUserJSON();

