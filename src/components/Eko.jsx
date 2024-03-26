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
          <span className="text-bold">Briga o prirodi</span> započinje u našim vrtovima. Odaberite svjetliju budućnost uz naše zelene metode za preuređenje dvorišta koje su jednostavne za planetu, ali velike za vaš dom.
        </p>
        <p className="margin-bottom-32">
          Naša je misija da vaš vrt cvjeta <span className="text-bold">prirodnom ljepotom</span>, a svaki naš korak u uređenju je korak prema zdravijoj i vedrijoj budućnosti za nas i planet <span className="text-bold">Zemlju</span> koju dijelimo.
        </p>
        <ONamaCards data={CardData}/>
      </div>
      <div className="image-container">
        <img className="flip-x" src={ekoKosilica} alt=""/>
      </div>
    </section>
  )
}