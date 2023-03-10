import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';

function FormRadio({ radio }) {
  const language = useContext(LanguageContext);
  return (
    <div>
      <input
        type="radio"
        className="form__radio visually-hidden"
        name="option"
        id={radio.id}
        value={radio.name[language]}
        required
      />
      <label htmlFor={radio.id} className="form__radio-label button">
        {radio.name[language]}
      </label>
    </div>
  );
}

export default FormRadio;
