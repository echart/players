import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../Input';

const props = {
  name: 'search-input',
  id: 'search',
  value: '10',
  placeholder: 'Buscar',
  onChange: jest.fn(),
  type: 'text',
  isRequired: true,
};

test('renders input correctly', () => {
  render(<Input {...props} />);
  const input = screen.getByTestId('input');

  expect(input).toBeInTheDocument();
  expect(input).toHaveValue(props.value);
  expect(input).toHaveAttribute('type', props.type)
  expect(input).toHaveAttribute('required');
});

test('renders input value correctly and change it', () => {
  const handleChange = (e) => expect(e.target.value).toEqual('new value');
  render(<Input {...props} onChange={handleChange} />);

  const input = screen.getByTestId('input');
  fireEvent.change(input, { target: { value: 'new value' } });
});

test('get input by placeholder to ensure it render correctly', () => {
  render(<Input {...props}/>);

  const input = screen.getByPlaceholderText(/Buscar/i);
  expect(input).toBeInTheDocument();
});
