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
  // eslint-disable-next-line no-unused-vars
  const [optionsQuantity, setOptionsQuantity] = useState(6);
  const [language, setLanguage] = useState(navigator.language.slice(0, 2));
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const initOptions = async (cards) => {
      setOptions(
        shuffle([
          cards[currentCard],
          ...cards
            .filter((letter) => letter.name[lang] !== cards[currentCard].name[lang])
            .slice(0, optionsQuantity - 1),
        ]),
      );
    };
    initOptions(deck);
  }, deck);

  const changeLang = () => setLanguage(language === 'en' ? 'ru' : 'en');

  const changeMode = ({ target }) => setInputMode(target.dataset.mode === 'radio' ? 'text' : 'radio');

  return (
    <div className="App">
      <LanguageContext.Provider value={language}>
        <Carousel deck={deck} />
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
          </Settings>
          <Form
            currentCard={currentCard}
            options={options}
            deck={deck}
            inputMode={inputMode}
          />
        </Controls>
        <Footer />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
