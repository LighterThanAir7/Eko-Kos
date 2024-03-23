import SectionTitle from "./SectionTitle.jsx";
import UslugeCards from "./UslugeCards.jsx";
import grassBg from "/src/assets/grass-bg.webp"

export default function Usluge () {
  return (
    <section id="usluge">
      <img className="bg-image" src={grassBg} alt="Close-up image of fresh spring green grass"/>
      <SectionTitle title="Usluge" type="fancy" white/>

      <p className="usluge__description">
        Istražite naše vrhunske usluge za uređenje okućnica, vikendica i  voćnjaka. Pouzdano i ekološki osvješteno, zadovoljstvo zajamčeno.
      </p>

      <UslugeCards/>

    </section>
  )
}