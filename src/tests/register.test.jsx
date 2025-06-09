import { render, screen } from '@testing-library/react';
import Register from '../componants/sections/auth/register';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../store/store';
import userEvent from '@testing-library/user-event';
import Navbar from '../componants/layout/navbar';

const renderWithProviders = ui =>
  render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>
  );

describe('register page', () => {
  test('render all form fields ', () => {
    // arrange
    renderWithProviders(<Register />);

    // assert
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
  });

  test('should submit button disabled if form fields empty', () => {
    // arrange
    renderWithProviders(<Register />);

    // assert
    const registerButton = screen.getByRole('button', { name: /create an account/i });
    expect(registerButton).toBeDisabled();
  });

  test('should submit button not disabled if form fields full', async () => {
    // arrange
    renderWithProviders(<Register />);

    // act
    await userEvent.type(screen.getByLabelText(/email/i), 'test@gmail.com');
    await userEvent.type(screen.getByLabelText(/username/i), 'testtt-112');
    await userEvent.type(screen.getByLabelText(/password/i), 'mmtest');
    await userEvent.type(screen.getByLabelText(/phone/i), '0104982622');

    // assert
    const registerButton = screen.getByRole('button', { name: /create an account/i });
    expect(registerButton).not.toBeDisabled();
  });

  test('should navigate to home page when button clicked ', async () => {
    // arrange
    renderWithProviders(
      <>
        <Navbar />
        <Register />
      </>
    );

    // act
    await userEvent.type(screen.getByLabelText(/email/i), 'test@gmail.com');
    await userEvent.type(screen.getByLabelText(/username/i), 'testtt-112');
    await userEvent.type(screen.getByLabelText(/password/i), 'mmtest');
    await userEvent.type(screen.getByLabelText(/phone/i), '0104982622');
    await userEvent.click(screen.getByRole('button', { name: /create an account/i }));
    // screen.debug();
    // assert
    expect(screen.getByRole('link', { name: /navbar.profile/i })).toBeInTheDocument();
  });
});
