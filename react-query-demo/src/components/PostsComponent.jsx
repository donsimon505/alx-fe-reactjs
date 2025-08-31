import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

function PostsComponent() {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery(
    "posts",
    fetchPosts,
    {
      staleTime: 5 * 60 * 1000, // 5 minutes cache
      cacheTime: 10 * 60 * 1000, // 10 minutes before garbage collection
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <p>
        {/* Optional: indicate cached data */}
        <em>
          Data is cached and will not refetch unless you click "Refetch Posts"
          or cache expires.
        </em>
      </p>
    </div>
  );
}

export default PostsComponent;
