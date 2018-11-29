import { shallow } from 'enzyme';
import PollList from '../PollList.js';
import React from 'react';

const doughnut = {
  "id": 1,
  "title": "Is bitcoin worth the time and money that mining requires?",
  "publishedDate": 1516605447,
  "answer": {
    "type": "Single",
    "options": [{
        "id": 1,
        "label": "Yes"
      },
      {
        "id": 2,
        "label": "No"
      }
    ]
  }
}

describe('PollList', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<PollList json={doughnut} />);
    expect(wrapper).toMatchSnapshot();
  });
});