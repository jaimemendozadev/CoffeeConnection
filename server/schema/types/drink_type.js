const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLList
} = graphql;

const DrinkType = new GraphQLObjectType({
  name: 'DrinkType',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    available_size: { type: new GraphQLList(GraphQLString) },
    image_url: {type: GraphQLString}
  }
});

module.exports = DrinkType;