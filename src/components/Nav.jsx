import {useEffect, useState} from "react";

export default function Nav () {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function handleMenu () {
    setIsMenuVisible(!isMenuVisible);
  }

  return (
    <>
      <nav className={`nav${isMenuVisible ? ' show' : ''}`}>
        <a className="nav__link" href="#o-nama">O nama</a>
        <a className="nav__link" href="#usluge">Usluge</a>
        <a className="nav__link" href="#galerija">Galerija</a>
        <a className="nav__link" href="#cijena">Cijena</a>
      </nav>
      <i onClick={handleMenu} className="menu icon-gear"></i>
    </>
  )
}