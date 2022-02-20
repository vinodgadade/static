import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', async () => {
  const component = render(<App />);
  expect(component.getByRole('table').hasChildNodes()).toBeTruthy()
});
