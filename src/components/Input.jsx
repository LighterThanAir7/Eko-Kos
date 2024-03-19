import {useState} from "react";

export default function Input ({name, placeholder }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <input
      className={`form__input ${inputValue ? 'form__input--has-text' : ''}`}
      type="text"
      name={name}
      placeholder={placeholder}
      required
      value={inputValue}
      onChange={handleInputChange}
    />
  )
}