import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="shadow-sm">
      <nav className="flex flex-row px-[20px] sm:px-[20px] lg:px-[100px] md:px-[50px] py-5 items-center">
        <h1 className="basis-8/12 font-bold text-md sm:text-md lg:text-xl md:text-xl">
          <Link to="/">Recipe Sharing Platform</Link>
        </h1>
        <ul className="flex justify-end space-x-8 basis-4/12 text-xs sm:text-xs lg:text-sm md:text-sm">
          <li>
            <Link to="/add">Add New Recipe</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
