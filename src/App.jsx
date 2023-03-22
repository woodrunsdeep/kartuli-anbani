import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from './components/Carousel/Carousel';
import Form from './components/Form/Form';
import Button from './components/Button/Button';
import Settings from './components/Settings/Settings';
import Controls from './components/Controls/Controls';
import Footer from './components/Footer/Footer';
import { selectSettings, setVisibility } from './features/settings/settingsSlice';
import { shuffleDeck, selectSession } from './features/sessionSlice';
import { shuffle } from './utils/utils';
import Dialog from './components/Dialog/Dialog';

function App() {
  const { deck, currentCardIndex } = useSelector(selectSession);
  const dispatch = useDispatch();

  const [options, setOptions] = useState([]);

  const generateOptions = async (cards) => {
    if (inputMode === 'radio') {
      const currentCardId = cards[currentCardIndex].id;
      const filteredCards = shuffle(cards.filter((card) => card.id !== currentCardId));
      const optionsToShuffle = [
        cards[currentCardIndex],
        ...filteredCards.slice(0, optionsQty - 1),
      ];
      const shuffledOptions = shuffle(optionsToShuffle);
      setOptions(shuffledOptions);
    }
  };

  useEffect(() => {
    generateOptions(deck);
  }, [deck, currentCardIndex, optionsQty]);

  return (
    <>
      <div className="content" inert={isVisible ? '' : null}>
        <Carousel />
        <Controls>
          <div className="controls__actions">
            <Button onClick={() => dispatch(setVisibility(true))}>⚙️</Button>
            <Button onClick={() => dispatch(shuffleDeck())}>♻️</Button>
          </div>
          <Form className="controls__form" options={options} />
        </Controls>
        <Footer />
      </div>
      <Dialog open={isVisible}>
        <Settings />
      </Dialog>
    </>
  );
}

export default App;
