import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../../App';

test('renders correct route at app start', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  )
  const pageTitle = screen.getByText(/Jogadores/i);
  expect(pageTitle).toBeInTheDocument();
});

test("renders correct route when navigate to edit", () => {
  const history = createMemoryHistory();
  history.push('/edit/1');
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  const pageTitle = screen.getByText(/Edição de Jogador/i);
  expect(pageTitle).toBeInTheDocument();
});
