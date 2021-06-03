import React from "react";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import "./navbar.css";

function Navbar({ onOpen, onclose, visible }) {
  return (
    <nav className="nav">
      <a href="#home" target="blank" className="containerLogo">
        <img src={logo} alt="logo" className="logo" />
      </a>
      <div className="containerBurger">
        <img src={user} alt="pic-user" className="img-user" />
        <div className="burger" onClick={onOpen}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
      {visible && (
      <ul className="links">
        <span className="close" onClick={onclose} >X</span>
        <a href="https://www.spotify.com/ar/premium/" className="link">Premium</a>
        <a
          href="https://support.spotify.com/ar/?_ga=2.35456097.1940636098.1606761659-1398993276.1604927309"
          className="link"
        >
          Ayuda
        </a>
        <a href="https://www.spotify.com/ar/download/" className="link">
          Descargar
        </a>
        <span className="break"/>
        <a href="https://www.spotify.com/ar/account/overview/" className="link-user">Cuenta</a>
        <a href="https://www.spotify.com/ar/account/overview/" className="link-user">Cerrar sesión</a>
        <a href="#home" target="blank" className="containerLogoSlide">
          <img src={logo} alt="logo" className="logo2" />
        </a>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
