import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

test('renders button correctly and all props are correctly applied', () => {
  render(
    <Button type='button' className='btn-test' onClick={() => null}>
      Salvar
    </Button>
  );
  const btn = screen.getByText(/Salvar/gi);
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveClass('btn-test');
  expect(btn).toHaveAttribute('type', 'button');
});

test('renders button primary', () => {
  render(
    <Button type='button' className='btn-test' onClick={() => null} isPrimary>
      Salvar
    </Button>
  );
  const btn = screen.getByText(/Salvar/gi);
  expect(btn).toHaveClass('btn--primary');
});

test('renders button secondary', () => {
  render(
    <Button type='button' className='btn-test' onClick={() => null} isSecondary>
      Salvar
    </Button>
  );
  const btn = screen.getByText(/Salvar/gi);
  expect(btn).toHaveClass('btn--secondary');
});

test('renders button, click and call onClick correctly', () => {
  const onClick = jest.fn();
  render(
    <Button type='button' className='btn-test' onClick={onClick}>
      Salvar
    </Button>
  );
  const btn = screen.getByText(/Salvar/gi);
  fireEvent.click(btn);
  expect(onClick).toHaveBeenCalled();
});
