import { useContext } from 'react';
import Button from '../Button/Button';
import FormInput from './FormInput';
import FormRadioGroup from './FormRadioGroup';
import './form.css';
import LanguageContext from '../../context/LanguageContext';

function Form({ inputMode, options }) {
  const language = useContext(LanguageContext);

  function handleSubmit(evt) {
    evt.preventDefault(); // submit handler draft
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <fieldset className="form__options">
        {inputMode === 'text' ? (
          <FormInput />
        ) : (
          <FormRadioGroup options={options} />
        )}
      </fieldset>
      <Button className="form__button" type="submit">
        {language === 'en' ? 'Submit' : 'Ответить'}
      </Button>
    </form>
  );
}

export default Form;
