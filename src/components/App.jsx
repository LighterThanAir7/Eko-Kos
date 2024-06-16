import {BrowserRouter, Route, Routes} from "react-router-dom";
import Pocetna from "./Pocetna.jsx";
import KakoRadimo from "./KakoRadimo.jsx";
import ONama from "./ONama.jsx";
import Eko from "./Eko.jsx";
import Usluge from "./Usluge.jsx";
import Galerija from "./Galerija.jsx";
import Cijena from "./Cijena.jsx";
import Footer from "./Footer.jsx";
import ONamaPage from "./ONamaPage.jsx";
import Header from "./Header.jsx";

function HomePage() {
  return (
    <>
      <Pocetna/>
      <KakoRadimo/>
      <ONama/>
      <Eko/>
      <Usluge/>
      <Galerija/>
      <Cijena/>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header dark={true}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kako-radimo" element={<KakoRadimo />} />
        <Route path="/o-nama" element={<ONamaPage />} />
        <Route path="/eko" element={<Eko />} />
        <Route path="/usluge" element={<Usluge />} />
        <Route path="/galerija" element={<Galerija />} />
        <Route path="/cijena" element={<Cijena />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
