const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean
} = graphql

const EmployeeType = new GraphQLObjectType({
  name: 'EmployeeType',
  fields: {
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    full_name: { type: GraphQLString },
    is_admin: { type: GraphQLBoolean },
    is_beverage_fetcher: { type: GraphQLBoolean }
  }
})

module.exports = EmployeeType
