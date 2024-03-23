import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import heroImg from "/src/assets/hero.webp"

export default function Pocetna () {
  return (
    <section id="pocetna">
      <img className="hero__img" src={heroImg} alt=""/>
      <Header/>
      <Hero/>
    </section>
  )
}