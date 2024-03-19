import SectionTitle from "./SectionTitle.jsx";

export default function Galerija () {
  return (
    <section id="galerija">
      <div className="flex-basis-50">
        <SectionTitle title="Galerija" type="fancy"/>
        <p className="margin-bottom-20">
          Naša galerija je mjesto gdje možete pronaći vizualnu inspiraciju za svoj  prostor. Slike su pažljivo odabrane kako bi prikazale našu stručnost u  raznim aspektima uređenja okoliša, od košnje trave i orezivanja voćaka  do estetskog uređivanja cvjetnih aranžmana.
        </p>
        <p className="margin-bottom-36">
          Pregledajte naše fotografije  i otkrijte kako možemo transformirati vašu okućnicu ili vikendicu u  oazu mira i ljepote.
        </p>
        <button className="btn">Pokreni galeriju</button>
      </div>
      <div className="image-container">
        <img src="/src/assets/galerija-cover.webp" alt=""/>
      </div>
    </section>
  )
}