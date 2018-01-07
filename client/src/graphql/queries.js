import gql from 'graphql-tag';

export const getAllDrinks = gql`
  query AllDrinks {
    allDrinks {
      id
      name
      available_sizes
      image_url
    }
  }
`;