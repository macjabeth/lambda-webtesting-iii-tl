import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';

test('displays `Close/Lock Gate` by default', () => {
  const { getByText } = render(<Controls />);
  expect(getByText('Close Gate')).toBeEnabled();
  expect(getByText('Lock Gate')).toBeDisabled();
});

test('displays `Unlock/Open Gate` when props as passed', () => {
  const { getByText } = render(<Controls closed locked />);
  expect(getByText('Unlock Gate')).toBeEnabled();
  expect(getByText('Open Gate')).toBeDisabled();
});

test('handles click events on each button', () => {
  const toggleLocked = jest.fn();
  const toggleClosed = jest.fn();

  const { getByText } = render(<Controls toggleLocked={toggleLocked} toggleClosed={toggleClosed} />);

  fireEvent.click(getByText('Lock Gate'));
  expect(toggleLocked).not.toHaveBeenCalled();
  fireEvent.click(getByText('Close Gate'));
  expect(toggleClosed).toHaveBeenCalled();
});