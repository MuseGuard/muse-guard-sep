import { render, screen, fireEvent } from '@testing-library/react';
import useLogin from '../Hooks/Auth'; // Import the login function
import AuthPage from '../Components/AuthPage';
import Home from '../Pages/Home';

jest.mock('../Hooks/Auth'); // Mock the login function

describe('AuthPage', () => {
  test('should handle login successfully', async () => {
    useLogin.mockResolvedValue({}); // Mock a successful login

    render(<AuthPage />);

    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(passwordInput, { target: { value: 'museguard' } });

    const loginButton = screen.getByRole('button', { name: 'Login' });
    fireEvent.click(loginButton);

    // Assert that the login function is called with the correct password
    expect(useLogin).toHaveBeenCalledWith('museguard');

    // Assert that the login status is set to true
    expect(screen.getByText('Logged in: true')).toBeInTheDocument();

    // Assert that the user is redirected to the home page
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });

  test('should handle login error', async () => {
    const error = new Error('Login failed');
    useLogin.mockRejectedValue(error); // Mock a failed login

    render(<AuthPage />);

    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    const loginButton = screen.getByRole('button', { name: 'Login' });
    fireEvent.click(loginButton);

    // Assert that the login function is called with the correct password
    expect(useLogin).toHaveBeenCalledWith('password123');

    // Assert that the error is logged
    expect(console.error).toHaveBeenCalledWith(error);

    // Assert that the error message is displayed
    expect(screen.getByText('Login failed')).toBeInTheDocument();
  });
});