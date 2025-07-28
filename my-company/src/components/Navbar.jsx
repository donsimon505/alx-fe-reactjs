import { Link } from "react-router-dom";
function Navbar() {
  const linkStyle = {
    color: "white",
    margin: "0 15px",
    textDecoration: "none",
    padding: "5px 10px",
  };

  return (
    <nav
      style={{
        backgroundColor: "#333",
        padding: "1rem",
        marginBottom: "20px",
        display: "justifyContent",
      }}
    >
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/about" style={linkStyle}>
        About
      </Link>
      <Link to="/services" style={linkStyle}>
        Services
      </Link>
      <Link to="/contact" style={linkStyle}>
        Contact
      </Link>
    </nav>
  );
}
export default Navbar;
