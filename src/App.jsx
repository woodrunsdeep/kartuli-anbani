import { useEffect, useState } from 'react';
import Carousel from './components/Carousel/Carousel';
import Form from './components/Form/Form';
import Button from './components/Button/Button';
import Settings from './components/Settings/Settings';
import Controls from './components/Controls/Controls';
import Footer from './components/Footer/Footer';
import LanguageContext from './context/LanguageContext';

import alphabet from './_data/alphabet.json';

import { shuffle } from './utils/utils';

function App() {
  const [deck, setDeck] = useState(shuffle(alphabet));
  const [inputMode, setInputMode] = useState('radio');
  const [optionsQuantity, setOptionsQuantity] = useState(6);
  const [language, setLanguage] = useState(navigator.language.slice(0, 2));
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
        ...filteredCards.slice(0, optionsQuantity - 1),
      ];
      const shuffledOptions = shuffle(optionsToShuffle);
      setOptions(shuffledOptions);
    }
  };

  const handleOptionsQChange = (evt) => {
    const newOptionsQty = +evt.target.value;
    if (inputMode === 'radio' && newOptionsQty !== optionsQuantity) {
      setOptionsQuantity(newOptionsQty);
    }
  };

  useEffect(() => {
    generateOptions(deck);
  }, [deck, currentCard, optionsQuantity]);

  const changeLang = () => setLanguage(language === 'en' ? 'ru' : 'en');

  const restartGame = () => {
    setResults([]);
    setDeck((prevDeckState) => shuffle(prevDeckState));
  };

  const changeMode = ({ target }) => setInputMode(target.dataset.mode === 'radio' ? 'text' : 'radio');

  return (
    <div className="App">
      <LanguageContext.Provider value={language}>
        <Carousel deck={deck} results={results} currentSlide={currentCard} />
        <Controls>
          <Settings>
            <Button
              className="settings__button"
              data-mode={inputMode}
              onClick={changeMode}
            >
              {inputMode === 'radio' ? '🔘' : '⌨️'}
            </Button>
            <Button className="settings__button" onClick={restartGame}>
              ♻️
            </Button>
            <Button className="settings__button" onClick={changeLang}>
              {language === 'en' ? '🇬🇧' : '🇷🇺'}
            </Button>
            {/* for debug only */}
            <Button className="settings__button" onClick={handleOptionsQChange} value="3">3</Button>
            <Button className="settings__button" onClick={handleOptionsQChange} value="4">4</Button>
            <Button className="settings__button" onClick={handleOptionsQChange} value="5">5</Button>
            <Button className="settings__button" onClick={handleOptionsQChange} value="6">6</Button>
            <Button className="settings__button" onClick={handleOptionsQChange} value="7">7</Button>
            <Button className="settings__button" onClick={handleOptionsQChange} value="8">8</Button>
            <Button className="settings__button" onClick={handleOptionsQChange} value="9">9</Button>
          </Settings>
          <Form
            currentCard={currentCard}
            options={options}
            deck={deck}
            inputMode={inputMode}
            setResults={setResults}
            answer={deck[currentCard]}
            setCurrentCard={setCurrentCard}
          />
        </Controls>
        <Footer />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
