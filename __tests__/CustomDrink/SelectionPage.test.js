import React from 'react'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {SelectionPage} from '../../client/src/components/CustomDrink/SelectionPage.jsx'

configure({ adapter: new Adapter() })

import {shallow} from 'enzyme'

const selectionPage = shallow(<SelectionPage />)

describe('SelectionPage', () => {
  it('renders properly', () => {
    expect(selectionPage).toMatchSnapshot();
  })
  
})