import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Header } from "@happyorg/header";

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const learnMore = getByText(/learn more/i);
  expect(learnMore).toBeDefined();
});
