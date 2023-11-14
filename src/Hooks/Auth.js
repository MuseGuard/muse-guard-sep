import axios from "axios";
import React, { useState } from "react";

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

    const clearError = () => {
        setError(null);
    };

    return {
        password,
        setPassword,
        isAuthenticated,
        authenticate,
        error,
        clearError,
    };
}

export default Auth;