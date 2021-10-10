import { render, screen } from '@testing-library/react';
import Container from '../Container';

test('renders the container correctly', () => {
  const h1 = <h1>Title</h1>;
  render(<Container>{h1}</Container>);

  const container = screen.queryByTestId('container');
  expect(container).toBeInTheDocument();
  expect(container.children).toHaveLength(1);
});
