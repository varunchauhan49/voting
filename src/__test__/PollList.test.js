import { shallow } from 'enzyme';
import PollList from '../PollList.js';
import React from 'react';

describe('PollList', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<PollList />);
    expect(wrapper).toMatchSnapshot();
  });
});