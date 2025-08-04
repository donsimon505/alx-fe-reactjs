import axios from "axios";

export const fetchGitHubUser = async (username) => {
  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
  const url = `https://api.github.com/users/${username}`;

  const headers = token ? { Authorization: `token ${token}` } : {};

  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error.message);
    return null;
  }
};
