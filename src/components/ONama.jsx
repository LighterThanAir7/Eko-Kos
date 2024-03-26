import SectionTitle from "./SectionTitle.jsx";
import ONamaCards from "./ONamaCards.jsx";
import kosnjaTrave from "/src/assets/photo-gallery/image-1.webp"
import CardData from "../data/oNamaCardData.json";

export default function ONama () {
  return (
    <section id="o-nama">
      <span className="triangle-bottom-left-flipped-x" role="presentation"></span>
      <div className="image-container image-container--corner-cut">
        <img src={kosnjaTrave} alt=""/>
      </div>
      <div className="o-nama__content">
        <SectionTitle title="O nama" type="fancy"/>
        <p className="margin-bottom-8">
          Naša tvrtka se ponosi dugogodišnjim iskustvom i stručnošću u području  uređenja i održavanja okućnica, vikendica i voćnjaka. Posvećeni smo pružanju vrhunskih usluga našim klijentima, uvijek težeći najvišim standardima kvalitete i pouzdanosti.
        </p>
        <p className="margin-bottom-32">
          Uz nas kao partnera možete biti sigurni da ćete dobiti pouzdane usluge visoke kvalitete po pristupačnim cijenama. Kontaktirajte nas danas i dopustite nam da vam pomognemo u stvaranju zelenijeg i održivijeg okoliša koji ćete s ponosom nazvati  svojim."
        </p>
        <ONamaCards data={CardData}/>
      </div>
    </section>
  )
}