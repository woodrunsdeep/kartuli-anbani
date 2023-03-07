import Button from '../Button/Button';
import FormInput from './FormInput';
import FormRadioGroup from './FormRadioGroup';
import './form.css';

function Form({ inputMode, options, language }) {
  function handleSubmit(evt) {
    evt.preventDefault(); // submit handler draft
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <fieldset className="form__options">
        {inputMode === 'text' ? (
          <FormInput language={language} />
        ) : (
          <FormRadioGroup options={options} language={language} />
        )}
      </fieldset>
      <Button className="form__button" type="submit">
        {language === 'en' ? 'Submit' : 'Ответить'}
      </Button>
    </form>
  );
}

export default Form;
