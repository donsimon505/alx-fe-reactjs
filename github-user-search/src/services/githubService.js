import axios from "axios";

export async function fetchAdvancedUserSearch({
  username,
  location,
  minRepos,
}) {
  let query = [];

  if (username) query.push(`user:${username}`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>${minRepos}`);

  const q = query.join("+");

  const url = `https://api.github.com/search/users?q=${q}`;

  const response = await axios.get(url);
  return response.data.items;
}
