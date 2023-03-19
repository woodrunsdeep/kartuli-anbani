import { useSelector } from 'react-redux';
import Button from '../Button/Button';
import FormInput from './FormInput';
import FormRadioGroup from './FormRadioGroup';
import './form.css';
import { selectSettings } from '../../features/settings/settingsSlice';

function Form({
  options, answer, setResults, currentCard, setCurrentCard, className,
}) {
  const classList = className ? `form ${className}` : 'form';

  const { language, inputMode, attemptsGiven } = useSelector(selectSettings);
  let attemptsLeft = attemptsGiven;

  function handleSubmit(evt) {
    evt.preventDefault(); // submit handler draft
    const guess = Object.fromEntries(new FormData(evt.target))
      .option.toLowerCase()
      .trim();

    if (guess === answer.name[language]) {
      setResults((prevState) => {
        const newResults = [...prevState];
        newResults[currentCard].isAnswerCorrect = true;
        return newResults;
      });
      attemptsLeft = attemptsGiven;
      setCurrentCard((prevCard) => prevCard + 1);
      evt.target.reset();
      return;
    }

    if (attemptsLeft <= 1) {
      evt.target.reset();
      setResults((prevState) => {
        const newResults = [...prevState];
        newResults[currentCard].isAnswerCorrect = false;
        return newResults;
      });
      setCurrentCard((prevCard) => prevCard + 1);
      return;
    }

    attemptsLeft -= 1;
    evt.target.reset();
  }

  return (
    <form className={classList} onSubmit={handleSubmit} autoComplete="off">
      <fieldset className="form__options">
        {inputMode === 'text' ? (
          <FormInput language={language} />
        ) : (
          <FormRadioGroup options={options} language={language} name="option" />
        )}
      </fieldset>
      <Button className="form__button" type="submit">
        {language === 'en' ? 'Submit' : 'Ответить'}
      </Button>
    </form>
  );
}

export default Form;
