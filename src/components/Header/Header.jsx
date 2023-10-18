import "./Header.css";

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = ({ logo, logoAlt }) => {
  const menuBtnClick = () => {
    const menuBtn = document.querySelector("#menu-btn");
    const navbar = document.querySelector(".header .navbar");
    menuBtn.classList.toggle("fa-times");
    navbar.classList.toggle("active");
  };

  return (
    <header className="header" translate="no">
      <div
        id="menu-btn"
        className="fas fa-bars icons"
        onClick={menuBtnClick}
      ></div>
      <a className="no-action-link"></a>
      <nav className="navbar">
        <NavLink to="tresenraya">Tresenraya</NavLink>
        <span className="space"></span>
        <NavLink to="ahorcado">Ahorcado</NavLink>
      </nav>
      <a className="no-action-link"></a>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt={logoAlt} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
