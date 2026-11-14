import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('positions Yash as an applied AI engineer with an inference focus', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/grounded, measured and fast/i);
  expect(screen.getByText('Applied AI Engineer')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /where the model meets the clock/i })).toBeInTheDocument();
});

test('lists the featured projects', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Local SDK Agent' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Customer churn MLOps pipeline' })).toBeInTheDocument();
});

test('latency budget recomputes when a slider moves', () => {
  render(<App />);
  // Defaults: 2000 prompt tokens at 2500 tok/s prefill = 800 ms to first token.
  expect(screen.getByText('Time to first token').nextSibling).toHaveTextContent('800 ms');
  fireEvent.change(screen.getByLabelText(/prefix served from cache/i), { target: { value: '50' } });
  expect(screen.getByText('Time to first token').nextSibling).toHaveTextContent('400 ms');
});
