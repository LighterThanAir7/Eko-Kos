import Pocetna from "./Pocetna.jsx";
import KakoRadimo from "./KakoRadimo.jsx";
import ONama from "./ONama.jsx";
import Usluge from "./Usluge.jsx";
import Galerija from "./Galerija.jsx";
import Cijena from "./Cijena.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <img className="hero__img" src="/src/assets/hero.webp" alt=""/>
      <Pocetna/>
      <KakoRadimo/>
      <ONama/>
      <Usluge/>
      <Galerija/>
      <Cijena/>
      <Footer/>
    </>
  )
}

export default App
