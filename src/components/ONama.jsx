import KakoRadimo from "./SectionTitle.jsx";
import ONamaCard from "./ONamaCard.jsx";
import SectionTitle from "./SectionTitle.jsx";
import ONamaCards from "./ONamaCards.jsx";

export default function ONama () {
  return (
    <section id="o-nama">
      <span className="triangle-bottom-left-flipped-x" role="presentation"></span>
      <div className="image-container">
        <img src="/src/assets/kosnja-trave.webp" alt=""/>
      </div>
      <div className="flex-basis-50">
        <SectionTitle title="O nama" type="fancy"/>
        <p className="margin-bottom-8">
          Naša tvrtka se ponosi dugogodišnjim iskustvom i stručnošću u području  uređenja i održavanja okućnica, vikendica i voćnjaka. Posvećeni smo pružanju vrhunskih usluga našim klijentima, uvijek težeći najvišim standardima kvalitete i pouzdanosti.
        </p>
        <p className="margin-bottom-32">
          Uz nas kao partnera možete biti sigurni da ćete dobiti pouzdane usluge visoke kvalitete po pristupačnim cijenama. Kontaktirajte nas danas i dopustite nam da vam pomognemo u stvaranju zelenijeg i održivijeg okoliša koji ćete s ponosom nazvati  svojim."
        </p>
        <ONamaCards/>
      </div>
      <div className="box"></div>
    </section>
  )
}