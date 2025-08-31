import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import UserPost from "./components/UserPost";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> |{" "}
        <Link to="/post/123">Example Post</Link>
        <button
          onClick={() => {
            // Toggle simulated login status
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

        {/* Protected Nested Route */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic Route */}
        <Route path="/post/:postId" element={<UserPost />} />
      </Routes>
    </Router>
  );
}

export default App;
