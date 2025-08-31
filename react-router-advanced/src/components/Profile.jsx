import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        {/* Absolute paths to prevent URL stacking */}
        <Link to="/profile/details">Details</Link> |{" "}
        <Link to="/profile/settings">Settings</Link>
      </nav>

      <Routes>
        {/* Use absolute paths in Route too */}
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
