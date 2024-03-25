import React, {useRef, useState} from 'react';
import * as emailjs from "@emailjs/browser";

export default function Form() {
  const form = useRef();
  const [formState, setFormState] = useState({
    name: '',
    surname: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: `${formState.name} ${formState.surname}`,
      from_email: formState.email,
      subject: formState.subject,
      message: formState.message,
    };

    emailjs.send('service_xwq2vop', 'template_1gd6z49', templateParams, '4ZPb-e3fZGWkJS1pw')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <form ref={form} className="form flex-basis-50" onSubmit={handleSubmit}>
      <div className="form__row">
        <input
          type="text"
          className={`form__input ${formState.name ? 'form__input--has-text' : ''}`}
          value={formState.name}
          onChange={handleChange}
          name="name"
          placeholder="Ime"
          required
        />
        <input
          type="text"
          className={`form__input ${formState.surname ? 'form__input--has-text' : ''}`}
          value={formState.surname}
          onChange={handleChange}
          name="surname"
          placeholder="Prezime"
          required
        />
      </div>
      <input
        type="email"
        className={`form__input ${formState.email ? 'form__input--has-text' : ''}`}
        value={formState.email}
        onChange={handleChange}
        name="email"
        placeholder="Vaša email adresa"
        required
      />
      <input
        type="text"
        className={`form__input ${formState.subject ? 'form__input--has-text' : ''}`}
        value={formState.subject}
        onChange={handleChange}
        name="subject"
        placeholder="Predmet"
        required
      />
      <textarea
        className={`form__input ${formState.message ? 'form__input--has-text' : ''}`}
        value={formState.message}
        onChange={handleChange}
        name="message"
        placeholder="Poruka"
        cols="30"
        rows="10"
        required
      />
      <button className="btn" type="submit">Pošalji</button>
    </form>
  );
}
