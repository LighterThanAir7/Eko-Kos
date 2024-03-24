import Input from "./Input.jsx";
import Textarea from "./Textarea.jsx";

export default function Form () {
  return (
    <form className="form flex-basis-50">
      <div className="form__row">
        <Input name="ime" placeholder="Ime" required />
        <Input name="prezime" placeholder="Prezime" required />
      </div>
      <Input name="predmet" placeholder="Predmet" required />
      <Textarea name="poruka" placeholder="Poruka" cols="30" rows="10" required />
      <button className="btn" type="submit">Pošalji</button>
    </form>
  )
}