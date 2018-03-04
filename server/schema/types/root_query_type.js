const mongoose = require('mongoose')
const graphql = require('graphql')
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql
const EmployeeType = require('./employee_type')
const Employee = mongoose.model('employee')
const TeamType = require('./team_type')
const Team = require('../../DB/models/team.js')
const DrinkType = require('./drink_type')
const Drink = require('../../DB/models/drink.js')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    allEmployees: {
      type: new GraphQLList(EmployeeType),
      resolve () {
        return Employee.find({})
      }
    },
    employee: {
      type: EmployeeType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve (parentValue, { id }) {
        return Employee.findById(id)
      }
    },
    user: {
      type: EmployeeType,
      resolve (parentValue, args, req) {
        return req.user
      }
    },
    allTeams: {
      type: new GraphQLList(TeamType),
      resolve () {
        return Team.find({})
      }
    },
    allDrinks: {
      type: new GraphQLList(DrinkType),
      resolve () {
        console.log('got inside allDrinks resolver')
        return Drink.find({})
      }
    }
  })
})

module.exports = RootQuery
