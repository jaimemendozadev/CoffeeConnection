import gql from 'graphql-tag'

export const getAllDrinks = gql`
  query AllDrinks {
    allDrinks {
      id
      name
      available_sizes
      image_url
    }
  }
`

export const GetCurrentEmployee = gql`
  query GetCurrentEmployee {
    currentEmployee @client {
      name
    }
  } 
`

export const CreateOrder = gql`
  query CreateOrder {
    createDrinkOrder @client {
      drink
      selected_size
      selected_milk
      other_options
    }
  }
`
