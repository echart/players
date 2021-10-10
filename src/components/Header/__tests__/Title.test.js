import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('render and display Header correcly', () => {
  const TITLE = 'Lorem ipsum';
  render(<Header title={TITLE}/>);

  const title = screen.queryByTestId('header');
  expect(title).toBeInTheDocument();
  expect(title).toBeVisible();
});

test('render Header with the correct text', () => {
  const TITLE = 'Lorem ipsum';
  render(<Header title={TITLE}/>);

  const title = screen.getByText(/Lorem Ipsum/i);
  expect(title).toBeInTheDocument();
});
