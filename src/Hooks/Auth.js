import axios from "axios";
import { useState } from "react";

const Auth = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);

  const authenticate = async () => {
        try {
            // Replace 'YOUR_API_ENDPOINT' with the actual endpoint to check the password
            const response = await axios.post('YOUR_API_ENDPOINT', { password });

            if (response.data.authenticated) {
                setIsAuthenticated(true);
            } else {
                setError("Incorrect password");
            }
        } catch (error) {
            console.error("Error during authentication:", error);
            setError("Error during authentication. Please try again.");
        }
    };

  const changePassword = async (newPassword) => {
    try {
// Replace 'YOUR_API_ENDPOINT' with the actual endpoint to change the password
      const response = await axios.post('YOUR_API_ENDPOINT/change-password', { newPassword });

      if (response.data.success) {
        setPassword(newPassword);
        clearError();
      } else {
        setError("Failed to change password");
      }
    } catch (error) {
      console.error("Error during password change:", error);
      setError("Error during password change. Please try again.");
    }
  };

  const clearError = () => {
    setError(null);
  };

  return {
    password,
    setPassword,
    isAuthenticated,
    authenticate,
    changePassword,
    error,
    clearError,
  };
};

export default Auth;
