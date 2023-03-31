import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import FormInput from './FormInput';
import FormAnswers from './FormAnswers';
import './form.css';
import { selectSettings } from '../../slices/settingsSlice';
import { answerCorrect, answerWrong, selectSession, selectGameOver, animate } from '../../slices/sessionSlice';

function Form({ className }) {
  const classList = className ? `form ${className}` : 'form';
  const dispatch = useDispatch();
  const { language, inputMode } = useSelector(selectSettings);
  const { deck, currentCardIndex, attempts } = useSelector(selectSession);
  const answer = deck[currentCardIndex].name[language];
  const isGameOver = useSelector(selectGameOver);

  function handleSubmit(evt) {
    evt.preventDefault();
    const guess = Object.fromEntries(new FormData(evt.target))
      .option.toLowerCase()
      .trim();

    if (!guess) {
      evt.target.reset();
      throw new Error('Empty string is not a valid input');
    }

    if (guess === answer) {
      dispatch(answerCorrect());
    } else {
      dispatch(answerWrong());
      if (attempts > 1) {
        dispatch(animate(true));
        setTimeout(() => {
          dispatch(animate(false));
        }, 300);
      }
    }

    evt.target.reset();
  }

  return (
    <form className={classList} onSubmit={handleSubmit} autoComplete="off" inert={isGameOver ? '' : null}>
      <fieldset className="form__fieldset">
        {inputMode === 'text' ? (
          <FormInput language={language} />
        ) : (
          <FormAnswers language={language} name="option" />
        )}
      </fieldset>
      <Button className="form__button button--font-size-l" type="submit">
        {language === 'en' ? 'Submit' : 'Ответить'}
      </Button>
    </form>
  );
}

export default Form;
