import ekoKosilica from "../assets/photo-gallery/image-11.webp";
import SectionTitle from "./SectionTitle.jsx";
import ONamaCards from "./ONamaCards.jsx";
import CardData from "../data/ekoNacinRada.json";

export default function Eko () {
  return (
    <section id="eko">
      <div className="o-nama__content">
        <SectionTitle title="Ekološki način rada" type="fancy"/>
        <p className="margin-bottom-8">
          Zaštita prirode počinje s vašeg dvorišta. Izaberite put koji vodi ka održivoj budućnosti sa našim ekološkim pristupom uređenju okućnica.
        </p>
        <p className="margin-bottom-32">
          Naš cilj je minimiziranje ekološkog otiska i poticanje biodiverziteta kroz inovativne i ekološki svjesne usluge za vaš domaći pejzaž.
        </p>
        <ONamaCards data={CardData}/>
      </div>
      <div className="image-container">
        <img className="flip-x" src={ekoKosilica} alt=""/>
      </div>
    </section>
  )
}