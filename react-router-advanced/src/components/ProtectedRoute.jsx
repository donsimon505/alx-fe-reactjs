import { Navigate } from "react-router-dom";

// Simulate authentication
const isAuthenticated = () => {
  // Replace with real auth logic
  return localStorage.getItem("auth") === "true";
};

function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    // Redirect to home or login if not authenticated
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
