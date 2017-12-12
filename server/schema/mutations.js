const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString
} = graphql;
const EmployeeType = require('./types/employee_type');
const AuthService = require('../services/auth');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: EmployeeType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.signup({ email, password, req });
      }
    },
    logout: {
      type: EmployeeType,
      resolve(parentValue, args, req) {
        //req.user from passport
        const { user } = req;
        req.logout();
        return user;
      }
    },
    login: {
      type: EmployeeType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.login({ email, password, req });
      }
    }
  }
});

module.exports = mutation;
