import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'; // <-- added screen, fireEvent
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './login';
import { store } from '../../../store/store';

const renderWithProviders = (ui) =>
  render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>
  );

describe('Login Page', () => {
  test('renders email and password fields', () => {
    renderWithProviders(<Login />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  test('login button is disabled when form is empty', () => {
    renderWithProviders(<Login />);
    const loginButton = screen.getByRole('button', { name: /send/i });
    expect(loginButton).toBeDisabled();
  });

  test('login button enables with valid input', () => {
    renderWithProviders(<Login />);
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: '123456' },
    });
    const loginButton = screen.getByRole('button', { name: /send/i });
    expect(loginButton).not.toBeDisabled();
  });
});
