import { useSelector } from 'react-redux';
import { selectSettings } from '../../features/settings/settingsSlice';
import './card.css';

function Card({ letter, isCorrect, isFinished }) {
  const { language } = useSelector(selectSettings);
  let classListCard = 'card';
  let classListBack = 'card__face card__face--back';

  classListBack += isCorrect ? ' card__face--success' : ' card__face--failed';
  classListCard += isFinished ? ' card card--flipped' : '';

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
