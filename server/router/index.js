const Router = require('express').Router();
const Employee = require('../models/employee');

Router.get('/employees', (req, res, next) => {
  res.send("<h1>Hit get /employees endpoint bruh</h1>");
/*
  Employee.find()
    .then(employees => res.send(employees))
    .catch(next);
*/

});

Router.post('/employees', (req, res, next) => {
  res.send("<h1>Hit post /employees endpoint bruh</h1>");

/*
  const employeeProps = req.body;
  Employee.create(employeeProps)
    .then(employee => res.send(employee))
    .catch(next);
*/
});

module.exports = Router;

