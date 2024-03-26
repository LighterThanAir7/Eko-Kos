import SectionTitle from "./SectionTitle.jsx";
import Form from "./Form.jsx";
import Pricing from "./Pricing.jsx";
import oldLogo from "/src/assets/old-logo.jpg"

export default function Cijena () {
  return (
    <section id="cijena">
      <SectionTitle title="Cijena" type="fancy"/>
      <div className="cijena">
        <div className="flex-basis-50">
          <Pricing/>
          <p className="margin-bottom-20">
            Prilagodljivost i transparentnost su od najveće važnosti u našem procesu suranje. Također možete ispunite obrazac s vašim pitanjem, a mi ćemo vam se javiti u najkraćem mogućem roku.
          </p>
          <h2>Gdje radimo</h2>
          <ul className="gdje-radimo">
            <li>Pantovčak</li>
            <li>Šestine</li>
            <li>Gračani</li>
            <li>Maksimir</li>
            <li>Medvešćak</li>
            <li>Šalata</li>
            <li>Gornja Dubrava</li>
          </ul>
          <div className="stari_logo">
            <img className="" src={oldLogo} alt="stari logo"/>
            <h3>Vaše zadovoljstvo je naš prioritet !</h3>
          </div>
        </div>
        <Form/>
      </div>
    </section>
  )
}