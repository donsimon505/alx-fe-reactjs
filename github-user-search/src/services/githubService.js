import axios from "axios";

export const fetchUserData = async (username) => {
  const url = `https://api.github.com/users/${username}`;

  try {
    const response = await axios.get(url);
    return response.data; // GitHub user data
  } catch (error) {
    throw error; // Will be handled by the calling component
  }
};
