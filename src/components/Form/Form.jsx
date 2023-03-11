import { useContext } from 'react';
import Button from '../Button/Button';
import FormInput from './FormInput';
import FormRadioGroup from './FormRadioGroup';
import './form.css';
import LanguageContext from '../../context/LanguageContext';

function Form({
  inputMode, options, answer, setResults,
}) {
  const language = useContext(LanguageContext);
  const attemptsAllowed = 3;
  let attemptsLeft = attemptsAllowed;

  function handleSubmit(evt) {
    evt.preventDefault(); // submit handler draft
    attemptsLeft -= 1;

    if (attemptsLeft <= 0) {
      evt.target.reset();
      return setResults((prevstate) => [
        ...prevstate,
        {
          isAnswerCorrect: false,
          letter: answer,
          attemptsUsed: attemptsAllowed,
        },
      ]);
    }

    const guess = Object.fromEntries(new FormData(evt.target)).option;

    if (guess === answer.name[language]) {
      const card = document.querySelector('.swiper-slide-active').querySelector('.card');
      card.classList.toggle('card--flipped');
      setResults((prevstate) => [
        ...prevstate,
        {
          isAnswerCorrect: true,
          letter: answer,
          attemptsUsed: (attemptsAllowed - attemptsLeft),
        },
      ]);
      attemptsLeft = attemptsAllowed;
      evt.target.reset();
    }
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
