import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { fetchUserData } from "./services/githubService";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can't find the user</p>}
      {user && (
        <div>
          <img src={user.avatar_url} alt="User Avatar" width="100" />
          <h2>{user.name || user.login}</h2>
          <p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
