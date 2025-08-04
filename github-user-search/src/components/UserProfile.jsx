function UserProfile({ user }) {
  if (!user) return null;

  return (
    <div>
      <p>Username: {user.login}</p>
      <p>Name: {user.name}</p>
      <p>Public Repos: {user.public_repos}</p>
      <p>
        Profile:
        <a href={user.html_url} target="_blank">
          Visit GitHub
        </a>
      </p>
    </div>
  );
}

export default UserProfile;
