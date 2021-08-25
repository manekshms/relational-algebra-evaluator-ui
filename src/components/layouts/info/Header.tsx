import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <header className="flex shadow py-2 px-5">
      <div className="w-40">
        <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          RAE
        </h3>
      </div>
      <div className="justify-items-stretch">
        <ul className="h-full items-center inline-flex space-x-4 align-middle">
          <li className="home-layout-header-box__menu_item">
            <Link
              className={`home-layout-header-box__menu-link ${
                pathname === "/" ? "text-blue-500" : ""
              }`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="home-layout-header-box__menu_item">
            <Link
              className={`home-layout-header-box__menu-link ${
                pathname === "/about" ? "text-blue-500" : ""
              }`}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="home-layout-header-box__menu_item">
            <Link
              className={`home-layout-header-box__menu-link ${
                pathname === "/get-started" ? "text-blue-500" : ""
              }`}
              to="/get-started"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
