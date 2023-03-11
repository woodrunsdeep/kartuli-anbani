import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';

function FormInput({ onInputChange }) {
  const language = useContext(LanguageContext);
  const labelText = language === 'en' ? 'Enter letter' : 'Введите букву';
  return (
    <label className="form__label">
      <span className="visually-hidden">{labelText}</span>
      <input
        className="form__input"
        type="text"
        name="option"
        required
        placeholder={labelText}
      />
    </label>
  );
}

export default FormInput;
