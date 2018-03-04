const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLString
} = graphql
const EmployeeType = require('./types/employee_type')
const AuthService = require('../services/auth')
const TeamType = require('./types/team_type')
// const NewTeamHelper = require('../services/helpers');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: EmployeeType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString }
      },
      resolve (parentValue, { email, password, first_name, last_name }, req) {
        return AuthService.signup({ email, password, first_name, last_name, req })
      }
    },
    logout: {
      type: EmployeeType,
      resolve (parentValue, args, req) {
        // req.user from passport
        const { user } = req
        req.logout()
        return user
      }
    },
    login: {
      type: EmployeeType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve (parentValue, { email, password }, req) {
        return AuthService.login({ email, password, req })
      }
    },
    teamFecther: {
      type: TeamType,
      args: {
        name: { type: GraphQLString }
      },
      resolve (parentValue, { name }, req) {
        return name
      }
    }
  }
})

module.exports = mutation
