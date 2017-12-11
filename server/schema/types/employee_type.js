const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql;

const EmployeeType = new GraphQLObjectType({
  name: 'EmployeeType',
  fields: {
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    full_name: { type: GraphQLString }
  }
});

module.exports = EmployeeType;