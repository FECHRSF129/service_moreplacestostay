import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import Carousel from '../client/src/components/carousel.jsx';
import Adapter from 'enzyme-adapter-react-16';
import Cards from '../client/src/components/card.jsx';

configure({adapter: new Adapter()});
describe('<Carousel />', () => {
  it('there are 12 <Cards /> items', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper.find(Cards)).to.have.lengthOf(12);
  })
})