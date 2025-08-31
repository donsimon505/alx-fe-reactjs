import { useQuery } from "react-query";
import axios from "axios";

function fetchPosts() {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data);
}

function Posts() {
  const { data, isLoading, isError, error } = useQuery("posts", fetchPosts);

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
