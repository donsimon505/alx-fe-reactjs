import { useState } from "react";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("auth") === "true"
  );

  // Provide a function to update auth manually if needed
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout, setIsAuthenticated };
}
