import Nav from "./Nav.jsx";
import Logo from "./Logo.jsx";

export default function Header ({ dark }) {
  return (
    <header className={`header ${dark ? 'header--dark' : ''}`}>
      <Logo dark={dark}/>
      <Nav dark={dark}/>
    </header>
  )
}