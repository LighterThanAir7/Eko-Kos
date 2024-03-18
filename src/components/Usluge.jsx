import SectionTitle from "./SectionTitle.jsx";
import UslugeCards from "./UslugeCards.jsx";

export default function Usluge () {
  return (
    <section id="usluge">
      <img className="bg-image" src="/src/assets/grass-bg.webp" alt="Close up of fresh grass as background"/>
      <SectionTitle title="Usluge" type="fancy" white/>

      <p>
        Istražite naše vrhunske usluge za uređenje okućnica, vikendica i  voćnjaka. Pouzdano i ekološki osvješteno, zadovoljstvo zajamčeno.
      </p>

      <UslugeCards/>

    </section>
  )
}