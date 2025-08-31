import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams(); // dynamic parameter
  return <p>Displaying post with ID: {id}</p>;
}

export default BlogPost;
