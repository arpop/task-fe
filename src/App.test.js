import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Render title', () => {
  render(<App />);
  const title = screen.getByText(/Keep employees busy/i);
  expect(title).toBeInTheDocument();
});
