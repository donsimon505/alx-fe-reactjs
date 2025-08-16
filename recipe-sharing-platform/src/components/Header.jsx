import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <h1>Recipe Sharing Platform</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add New Recipe</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
