import { shallow } from 'enzyme';
import Poll from '../Poll.js';
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

describe('Poll', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Poll json={doughnut} />);
    expect(wrapper).toMatchSnapshot();
  });
});