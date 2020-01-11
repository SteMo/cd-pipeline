import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import RatingTable from './RatingTable';
import { shallow } from 'enzyme';
import RatingRow from './RatingRow';

test('renders a table', () => {
  const storyList = [
    { name: "Dr. Sommer", views: 200, rating: 9 },
    { name: "Chili-Tester", views: 150, rating: 8 }
  ];
  const wrapper = shallow(<RatingTable storyList={storyList} />);
  expect(wrapper.find('table')).toHaveLength(1);
});

test('renders params as RatingRows', () => {
  const storyList = [
    { name: "Dr. Sommer", views: 200, rating: 9 },
    { name: "Chili-Tester", views: 150, rating: 8 }
  ];
  const wrapper = shallow(<RatingTable storyList={storyList} />);
  expect(wrapper.find(RatingRow)).toHaveLength(2);
});