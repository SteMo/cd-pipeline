import React from 'react';
import RatingRow from './RatingRow';
import { render } from '@testing-library/react';

test('renders name, views and ratings as content', () => {
  const testName = "Rudolf123";
  const testViews = 4711;
  const testRating = 5.0;
  const { getByText } = render(<RatingRow name={testName} views={testViews} rating={testRating} />);
  expect(getByText(testName)).toBeInTheDocument(testName);
  expect(getByText(testViews.toString())).toBeInTheDocument(testViews);
  expect(getByText(testRating.toString())).toBeInTheDocument(testRating);
});