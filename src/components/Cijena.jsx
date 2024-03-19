import SectionTitle from "./SectionTitle.jsx";
import {useState} from "react";
import Input from "./Input.jsx";
import Textarea from "./Textarea.jsx";

export default function Cijena () {
  return (
    <section id="cijena">
      <SectionTitle title="Cijena" type="fancy"/>
      <div>
        <div className="flex-basis-50">
          <div className="pricing">
            <i className="pricing__icon icon-euro-coin"></i>
            <p className="pricing__text">
              Svaka usluga prilagođava se vašim potrebama, stoga <span className="text-bold">cijena ovisi o tipu usluge i obujmu posla</span>.
            </p>
          </div>
          <p>
            Prilagodljivost i transparentnost su od najveće važnosti u našem procesu suranje. Također možete ispunite obrazac s vašim pitanjem, a mi ćemo vam se javiti u najkraćem mogućem roku.
          </p>
          <img src="/src/assets/old-logo.jpg" alt=""/>
          <h3>Vaše zadovoljstvo je naš prioritet !</h3>
        </div>
        <form className="form flex-basis-50">
          <div className="form__row">
            <Input name="ime" placeholder="Ime"/>
            <Input name="prezime" placeholder="Prezime"/>
          </div>
          <Input name="predmet" placeholder="Predmet"/>
          <Textarea name="poruka" placeholder="Poruka" cols="30" rows="10"/>
          <button className="btn" type="submit">Pošalji</button>
        </form>
      </div>
    </section>
  )
}