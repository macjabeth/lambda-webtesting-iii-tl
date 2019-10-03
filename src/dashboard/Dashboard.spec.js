import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

test('shows the control and display', () => {
  const { getByText } = render(<Dashboard />);
  getByText('Close Gate');
  getByText('Lock Gate');
  getByText('Unlocked');
  getByText('Open');
});

test('changes button texts on click', () => {
  const { getByText } = render(<Dashboard />);
  const gateBtn = getByText('Close Gate');
  const lockBtn = getByText('Lock Gate');
  fireEvent.click(gateBtn);
  expect(lockBtn).toBeEnabled();
  expect(gateBtn).toHaveTextContent('Open Gate');
  fireEvent.click(lockBtn);
  expect(gateBtn).toBeDisabled();
  expect(lockBtn).toHaveTextContent('Unlock Gate');
});