import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSession } from '../../slices/sessionSlice';
import { selectSettings } from '../../slices/settingsSlice';
import { shuffle } from '../../utils/utils';
import FormRadio from './FormRadio';

function FormRadioGroup({ name, language }) {
  const { deck, currentCardIndex } = useSelector(selectSession);
  const { optionsQty } = useSelector(selectSettings);
  const [options, setOptions] = useState([]);

  const generateOptions = async (cards) => {
    const currentCardId = cards[currentCardIndex].id;
    const filteredCards = shuffle(cards.filter((card) => card.id !== currentCardId));
    const optionsToShuffle = [
      cards[currentCardIndex],
      ...filteredCards.slice(0, optionsQty - 1),
    ];
    const shuffledOptions = shuffle(optionsToShuffle);
    setOptions(shuffledOptions);
  };

  useEffect(() => {
    generateOptions(deck);
  }, [deck, currentCardIndex, optionsQty]);
  return (
    <div className="form__radio-group">
      {options.map((radio) => (
        <FormRadio
          value={radio.name[language]}
          id={radio.id}
          key={radio.id}
          label={radio.name[language]}
          name={name}
        />
      ))}
    </div>
  );
}

export default FormRadioGroup;
