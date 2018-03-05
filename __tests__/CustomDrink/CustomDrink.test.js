import React from 'react'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CustomDrink from '../../client/src/components/CustomDrink/index.jsx'

configure({ adapter: new Adapter() })

import {shallow} from 'enzyme'

const customDrink = shallow(<CustomDrink />)

describe('CustomDrink', () => {
  it('renders properly', () => {
    expect(customDrink).toMatchSnapshot()
  })

  describe('state of CustomDrink', () => {
    it('initializes with `selectionPage` state to true', () => {
      expect(customDrink.state().selectionPage).toEqual(true)
    })

    it('initializes with `toggleSize` state to false', () => {
      expect(customDrink.state().toggleSize).toEqual(false)
    })

    it('initializes with `toggleMilk` state to false', () => {
      expect(customDrink.state().toggleMilk).toEqual(false)
    })

    it('initializes with `toggleSweet` state to false', () => {
      expect(customDrink.state().toggleSweet).toEqual(false)
    })

    it('initializes with `toggleToppings` state to false', () => {
      expect(customDrink.state().toggleToppings).toEqual(false)
    })
    it('initializes with `confirmationPage` state to false', () => {
      expect(customDrink.state().confirmationPage).toEqual(false)
    })
  })

  /*
  it('initially renders a SelectionPage for selecting either coffee or tea', () => {
    expect(customDrink.find('SelectionPage').exists()).toBe(true)
  })
  */
})
