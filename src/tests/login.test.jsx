import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from '../componants/sections/auth/login';
import { store } from '../store/store';
import userEvent from '@testing-library/user-event';

const renderWithProviders = ui =>
  render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>
  );

describe('Login Page', () => {
  test('renders email and password fields', () => {
    // arrange
    renderWithProviders(<Login />);
    // assert
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  test('login button is disabled when form is empty', () => {
    // arrange
    renderWithProviders(<Login />);
    // assert
    const loginButton = screen.getByRole('button', { name: /send/i });
    expect(loginButton).toBeDisabled();
  });

  test('login button enables with valid input', async () => {
    // arrange
    renderWithProviders(<Login />);
    // act
    await userEvent.type(screen.getByLabelText(/email/i), 'test@gmail.com');
    await userEvent.type(screen.getByLabelText(/password/i), 'mmtestt');
    // assert
    const loginButton = screen.getByRole('button', { name: /send/i });
    expect(loginButton).not.toBeDisabled();
  });
});
