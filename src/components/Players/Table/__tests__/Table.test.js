import { render, screen, fireEvent } from '@testing-library/react';
import Table from '../Table';

test('renders table correctly and click to ordered', () => {
  const onChangeOrder = jest.fn();
  render(
    <Table onChangeOrder={onChangeOrder} order="name" direction="asc">
      <tr><td>Hello World</td></tr>
    </Table>
  );
  const btn = screen.getByText(/Jogador/gi);
  fireEvent.click(btn);
  expect(onChangeOrder).toHaveBeenCalled();
});
