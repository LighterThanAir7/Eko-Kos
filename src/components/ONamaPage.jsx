import SectionTitle from "./SectionTitle.jsx";
import ONamaCards from "./ONamaCards.jsx";
import kosnjaTrave from "/src/assets/photo-gallery/image-1.webp"
import CardData from "../data/oNamaCardData.json";

export default function ONamaPage () {
  return (
    <>
      <section className={"o-nama o-nama--center"}>
        <div className="o-nama__content">
          <SectionTitle title="O nama" type="fancy"/>
          <p className="margin-bottom-8">
            Naša tvrtka se ponosi <span className="text-bold">dugogodišnjim iskustvom</span> i stručnošću u području
            uređenja i održavanja okućnica, vikendica i voćnjaka. Posvećeni smo pružanju <span className="text-bold">vrhunskih
          usluga</span> našim klijentima, uvijek težeći najvišim standardima kvalitete i pouzdanosti.
          </p>
          <p className="margin-bottom-32">
            Uz nas kao <span className="text-bold">partnera</span> možete biti sigurni da ćete dobiti pouzdane usluge
            visoke kvalitete po <span className="text-bold">pristupačnim
          cijenama</span>. Kontaktirajte nas danas i dopustite nam da vam pomognemo u stvaranju zelenijeg i održivijeg
            okoliša koji ćete s ponosom nazvati svojim."
          </p>
          <ONamaCards data={CardData}/>
        </div>
        <div className="image-container">
          <img src={kosnjaTrave} alt=""/>
        </div>
      </section>
    </>
  )
}