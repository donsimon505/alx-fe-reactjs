import { useParams } from "react-router-dom";

function UserPost() {
  const { postId } = useParams(); // dynamic parameter
  return <p>Displaying post with ID: {postId}</p>;
}

export default UserPost;
