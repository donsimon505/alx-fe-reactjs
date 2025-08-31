import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { setIsAuthenticated } = useAuth();

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> |{" "}
        <Link to="/blog/123">Example Post</Link> |{" "}
        <button
          onClick={() => {
            const newAuth = localStorage.getItem("auth") !== "true";
            localStorage.setItem("auth", newAuth ? "true" : "false");
            setIsAuthenticated(newAuth); // Update hook state
            alert("Auth status: " + newAuth);
          }}
        >
          Toggle Login
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />

        {/* Protected Profile with nested routes */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic Route */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
