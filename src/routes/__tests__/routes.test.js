import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { QueryClientProvider } from 'react-query';
import { client } from '../../config/client';
import App from '../../App';

const Player = {
  id: 1,
  name: 'Marcos',
  shirt: 9,
  matches: 3,
  goals: 4,
};

test('renders correct route at app start', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </Router>
  );
  const pageTitle = screen.getByText(/^Jogadores/gi);
  expect(pageTitle).toBeInTheDocument();
});

test('renders correct route when navigate to edit', () => {
  localStorage.setItem('player', JSON.stringify(Player));
  const history = createMemoryHistory();
  history.push('/players/1/edit');
  render(
    <Router history={history}>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </Router>
  );
  const pageTitle = screen.getByText(/Edição de Jogador/i);
  expect(pageTitle).toBeInTheDocument();
});
