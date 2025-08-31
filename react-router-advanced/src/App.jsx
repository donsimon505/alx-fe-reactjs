import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> |{" "}
        <Link to="/blog/123">Example Post</Link> |{" "}
        <button
          onClick={() => {
            // Toggle login status
            localStorage.setItem(
              "auth",
              localStorage.getItem("auth") === "true" ? "false" : "true"
            );
            alert("Auth status: " + localStorage.getItem("auth"));
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
