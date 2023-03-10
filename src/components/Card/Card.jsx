import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';
import './card.css';

function Card({ letter }) {
  const language = useContext(LanguageContext);
  function flip(evt) {
    evt.currentTarget.classList.toggle('card--flipped');
  }

  return (
    <div className="card" data-id={letter.id} onClick={flip}>
      <div className="card__face card__face--front">
        <p className="card__letter">{letter.georgian}</p>
      </div>
      <div className="card__face card__face--back">
        <p className="card__letter">{letter.georgian}</p>
        <p className="card__letter-name">{letter.name[language]}</p>
        <p className="card__letter-ipa">{letter.ipa}</p>
      </div>
    </div>
  );
}

export default Card;
