import { useContext } from 'react';
import Button from '../Button/Button';
import FormInput from './FormInput';
import FormRadioGroup from './FormRadioGroup';
import './form.css';
import LanguageContext from '../../context/LanguageContext';

function Form({
  inputMode, options, answer, setResults, currentCard, setCurrentCard,
}) {
  const language = useContext(LanguageContext);
  const attemptsAllowed = 3;
  let attemptsLeft = attemptsAllowed;

  function handleSubmit(evt) {
    evt.preventDefault(); // submit handler draft
    attemptsLeft -= 1;

    if (attemptsLeft <= 0) {
      evt.target.reset();
      setResults((prevState) => {
        const newResults = [...prevState];
        newResults[currentCard].isAnswerCorrect = false;
        return newResults;
      });
      setCurrentCard((prevCard) => prevCard + 1);
      return;
    }

    const guess = Object.fromEntries(new FormData(evt.target)).option.toLowerCase().trim();

    if (guess === answer.name[language]) {
      setResults((prevState) => {
        const newResults = [...prevState];
        newResults[currentCard].isAnswerCorrect = true;
        return newResults;
      });
      attemptsLeft = attemptsAllowed;
      setCurrentCard((prevCard) => prevCard + 1);
      evt.target.reset();
      return;
    }

    evt.target.reset();
  }

  return (
    <form className="form" onSubmit={handleSubmit} autoComplete="off">
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
