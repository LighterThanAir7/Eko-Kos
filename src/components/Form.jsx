import React, {useRef, useState} from 'react';
import * as emailjs from "@emailjs/browser";

export default function Form() {
  const [formState, setFormState] = useState({
    name: '',
    surname: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState({
    message: '',
    type: ''
  });

  const form = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));

    if (submissionStatus.message) {
      setSubmissionStatus({ message: '', type: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_xwq2vop';
    const templateID = 'template_1gd6z49';
    const publicKey = '4ZPb-e3fZGWkJS1pw';

    const templateParams = {
      from_name: `${formState.name} ${formState.surname}`,
      from_email: formState.email,
      subject: formState.subject,
      message: formState.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setSubmissionStatus({ message: 'Vaša poruka je uspješno poslana !', type: 'success' });
          setFormState({
            name: '',
            surname: '',
            email: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSubmissionStatus({ message: 'Došlo je do pogreške prilikom slanja poruke !', type: 'error' });
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
      <button className="btn margin-bottom-16" type="submit">Pošalji</button>
      {submissionStatus.message && (
        <p className={submissionStatus.type === 'success' ? 'message message--success' : 'message message--error'}>
          {submissionStatus.message}
        </p>
      )}
    </form>
  );
}
