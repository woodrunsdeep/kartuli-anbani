import { useSelector } from 'react-redux';
import { selectSettings } from '../../features/settings/settingsSlice';
import './card.css';

function Card({ letter, isCorrect }) {
  const { language } = useSelector(selectSettings);
  let classListCard = 'card';
  let classListBack = 'card__face card__face--back';

  classListCard += isCorrect === true || isCorrect === false ? ' card card--flipped' : '';
  classListBack += isCorrect === true ? ' card__face--success' : '';
  classListBack += isCorrect === false ? ' card__face--failed' : '';

  return (
    <div className={classListCard} data-id={letter.id}>
      <div className="card__face card__face--front">
        <p className="card__letter">{letter.georgian}</p>
      </div>
      <div className={classListBack}>
        <p className="card__letter">{letter.georgian}</p>
        <p className="card__letter-name">{letter.name[language]}</p>
        <p className="card__letter-ipa">{letter.ipa}</p>
      </div>
    </div>
  );
}

export default Card;
