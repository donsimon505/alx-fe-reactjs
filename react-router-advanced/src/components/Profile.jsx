import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        {/* Use absolute paths to prevent nested URL issues */}
        <Link to="/profile/details">Details</Link> |{" "}
        <Link to="/profile/settings">Settings</Link>
      </nav>

      {/* Nested Routes inside Profile.jsx */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
