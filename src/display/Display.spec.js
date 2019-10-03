import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

test('displays `Unlocked/Open` with `green-led` classes by default', () => {
  const { getByText } = render(<Display />);
  expect(getByText('Unlocked')).toHaveClass('green-led');
  expect(getByText('Open')).toHaveClass('green-led');
});

test('displays `Locked/Closed` with `red-led` classes when props are passed', () => {
  const { getByText } = render(<Display closed locked />);
  expect(getByText('Closed')).toHaveClass('red-led');
  expect(getByText('Locked')).toHaveClass('red-led');
});
