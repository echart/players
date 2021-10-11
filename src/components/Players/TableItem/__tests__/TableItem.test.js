import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import Item from '../TableItem';

const props = {
  id: 1,
  name: 'Marcos',
  shirt: 9,
  matches: 3,
  goals: 4,
};

test('renders TableItem correctly', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <table>
        <tbody>
          <Item {...props} />
        </tbody>
      </table>
    </Router>
  );
  const item = screen.getByTestId('row');

  expect(item.querySelector('.shirt')).toHaveTextContent(props.shirt);
  expect(item.querySelector('.name')).toHaveTextContent(props.name);
  expect(item.querySelector('.goals')).toHaveTextContent(props.goals);
  expect(item.querySelector('.matches')).toHaveTextContent(props.matches);
});
