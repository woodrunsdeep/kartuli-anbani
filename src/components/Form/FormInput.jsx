import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';

function FormInput({ onInputChange }) {
  const language = useContext(LanguageContext);
  return (
    <label className="form__label">
      <input
        className="form__input"
        type="text"
        name="option"
        required
        placeholder={language === 'en' ? 'Enter letter' : 'Введите букву'}
        onChange={onInputChange}
      />
    </label>
  );
}

export default FormInput;
