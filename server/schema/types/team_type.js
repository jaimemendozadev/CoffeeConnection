const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql

const TeamType = new GraphQLObjectType({
  name: 'TeamType',
  fields: {
    name: { type: GraphQLString },
    id: { type: GraphQLID }
  }
})

module.exports = TeamType
