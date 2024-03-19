import {useState} from "react";

export default function Textarea ({name, placeholder, cols, rows }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <textarea
      className={`form__input ${inputValue ? 'form__input--has-text' : ''}`}
      name={name}
      placeholder={placeholder}
      cols={cols}
      rows={rows}
      required
      value={inputValue}
      onChange={handleInputChange}
    />
  )
}