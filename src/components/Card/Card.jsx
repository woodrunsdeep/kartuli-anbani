import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { selectSettings } from '../../slices/settingsSlice';
import './card.css';
import { selectSession } from '../../slices/sessionSlice';

function Card({ letter, isCorrect, isFinished, isActive }) {
  const { language } = useSelector(selectSettings);
  const { isAnimated } = useSelector(selectSession);
  const nodeRef = useRef(null);
  let classListCard = 'card';
  let classListBack = 'card__face card__face--back';

  classListCard += isActive ? ' card--active' : '';
  classListBack += isCorrect ? ' card__face--success' : ' card__face--failed';
  classListCard += isFinished ? ' card card--flipped' : '';

  return (
    <CSSTransition
      in={isAnimated}
      timeout={300}
      classNames="card"
      nodeRef={nodeRef}
    >
      <div className={classListCard} ref={nodeRef}>
        <div className="card__face card__face--front">
          <p className="card__letter">{letter.georgian}</p>
        </div>
        <div className={classListBack}>
          <p className="card__letter">{letter.georgian}</p>
          <p className="card__letter-name">{letter.name[language]}</p>
          <p className="card__letter-ipa">{letter.ipa}</p>
        </div>
      </div>
    </CSSTransition>
  );
}

export default Card;
