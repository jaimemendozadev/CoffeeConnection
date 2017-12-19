const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} = graphql;

const TeamType = new GraphQLObjectType({
  name: 'TeamType',
  fields: {
    name: { type: GraphQLString },
    id: { type: GraphQLID }
  }
});

module.exports = TeamType;
