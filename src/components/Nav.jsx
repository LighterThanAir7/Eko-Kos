import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav({dark}) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function handleMenu() {
    setIsMenuVisible(!isMenuVisible);
  }

  function handleNavClick(e) {
    if (e.target.classList.contains('nav__link'))
      setIsMenuVisible(false);
  }

  return (
    <>
      <nav onClick={handleNavClick} className={`nav${dark ? ' nav--dark' : ''}${isMenuVisible ? ' show' : ''}`}>
        <NavLink className="nav__link" to="/o-nama">O nama</NavLink>
        <NavLink className="nav__link" to="/usluge">Usluge</NavLink>
        <NavLink className="nav__link" to="/galerija">Galerija</NavLink>
        <NavLink className="nav__link" to="/cijena">Cijena</NavLink>
      </nav>
      <div onClick={handleMenu} className={`menu-icon${isMenuVisible ? ' transformed' : ''}`}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </>
  );
}