import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from './components/Carousel/Carousel';
import Form from './components/Form/Form';
import Button from './components/Button/Button';
import Settings from './components/Settings/Settings';
import Controls from './components/Controls/Controls';
import Footer from './components/Footer/Footer';
import { selectSettings, setVisibility } from './features/settings/settingsSlice';
import { shuffleDeck, selectDeck } from './features/deck/deckSlice';
import { shuffle } from './utils/utils';
import Dialog from './components/Dialog/Dialog';

function App() {
  const deck = useSelector(selectDeck);
  const {
    isVisible, optionsQty, language, inputMode,
  } = useSelector(selectSettings);
  const dispatch = useDispatch();

  const [options, setOptions] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);

  const initialResults = (cards) => (
    cards.map((card) => ({
      isAnswerCorrect: null,
      letter: card.name[language],
    })));

  const [results, setResults] = useState(() => initialResults(deck));

  const generateOptions = async (cards) => {
    if (inputMode === 'radio') {
      const currentCardId = cards[currentCard].id;
      const filteredCards = shuffle(cards.filter((card) => card.id !== currentCardId));
      const optionsToShuffle = [
        cards[currentCard],
        ...filteredCards.slice(0, optionsQty - 1),
      ];
      const shuffledOptions = shuffle(optionsToShuffle);
      setOptions(shuffledOptions);
    }
  };

  useEffect(() => {
    generateOptions(deck);
  }, [deck, currentCard, optionsQty]);

  return (
    <>
      <div className="content" inert={isVisible ? '' : null}>
        <Carousel results={results} currentSlide={currentCard} />
        <Controls>
          <div className="controls__actions">
            <Button onClick={() => dispatch(setVisibility(true))}>⚙️</Button>
            <Button onClick={() => dispatch(shuffleDeck())}>♻️</Button>
          </div>
          <Form
            currentCard={currentCard}
            options={options}
            deck={deck}
            setResults={setResults}
            answer={deck[currentCard]}
            setCurrentCard={setCurrentCard}
          />
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
