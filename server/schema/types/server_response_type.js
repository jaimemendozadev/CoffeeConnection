const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLList
} = graphql;

const ServerResponseType = new GraphQLObjectType({
  name: 'ServerResponseType',
  fields: {
    name: { type: GraphQLString },
    status: { type: GraphQLString }
  }
});

module.exports = ServerResponseType;