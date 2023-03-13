import { useContext } from 'react';
import FormRadio from './FormRadio';
import LanguageContext from '../../context/LanguageContext';

function FormRadioGroup({ options }) {
  const language = useContext(LanguageContext);
  return (
    <div className="form__radio-group">
      {options.map((radio) => (
        <FormRadio
          value={radio.name[language]}
          id={radio.id}
          key={radio.id}
          name="option"
        />
      ))}
    </div>
  );
}

export default FormRadioGroup;
