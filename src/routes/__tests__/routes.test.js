import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { QueryClientProvider } from 'react-query';
import { client } from '../../config/client';
import App from '../../App';

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
