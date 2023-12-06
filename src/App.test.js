import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // Use a function for more flexible text matching
  const linkElement = screen.getByText((content, element) => {
    // Check if the text content matches the regular expression
    return /Enter Pin/i.test(content);
  });
  expect(linkElement).toBeInTheDocument();
});
