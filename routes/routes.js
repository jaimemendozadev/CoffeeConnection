const Employee = require('../models/employee');

module.exports = (app) => {
  app.get('/api/employees', (req, res, next) => {
    Employee.find()
      .then(employees => res.send(employees))
      .catch(next);
  });
  app.post('/api/employees', (req, res, next) => {
    const employeeProps = req.body;
    Employee.create(employeeProps)
      .then(employee => res.send(employee))
      .catch(next)
  })
};
