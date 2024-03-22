import React, { createContext, useContext, useState } from 'react';

// Create a context for authentication
const AuthContext = createContext();

// Custom hook to consume the authentication context
export function useAuthSKR() {
  return useContext(AuthContext);
}

// Authentication provider component
export function AuthProviderSKR({ children }) {
  // State to track authentication status
  const [isAuthenticatedSKR, setIsAuthenticatedSKR] = useState(false);

  // Function to handle user login
  const loginSKR = () => {
    setIsAuthenticatedSKR(true);
  };

  // Function to handle user logout
  const logoutSKR = () => {
    setIsAuthenticatedSKR(false);
  };

  // Value object containing authentication state and functions
  const value = {
    isAuthenticatedSKR,
    loginSKR,
    logoutSKR,
  };

  // Provide the authentication context to the application
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
