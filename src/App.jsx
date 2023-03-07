import { useEffect, useState } from 'react';
import Carousel from './components/Carousel/Carousel';
import Form from './components/Form/Form';
import Button from './components/Button/Button';
import Settings from './components/Settings/Settings';
import Controls from './components/Controls/Controls';
import Footer from './components/Footer/Footer';

import alphabet from './_data/alphabet.json';

import { shuffle } from './utils/utils';

function App() {
  const [deck, setDeck] = useState(shuffle(alphabet));
  const [inputMode, setInputMode] = useState('radio');
  // eslint-disable-next-line no-unused-vars
  const [optionsQuantity, setOptionsQuantity] = useState(6);
  const [lang, setLang] = useState(navigator.language.slice(0, 2));
  // eslint-disable-next-line no-unused-vars
  const [currentCard, setCurrentCard] = useState(0);
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

  const changeLang = () => setLang(lang === 'en' ? 'ru' : 'en');
  const restartGame = () => setDeck(shuffle(deck));

  const changeMode = ({ target }) => setInputMode(target.dataset.mode === 'radio' ? 'text' : 'radio');

  return (
    <div className="App">
      <Carousel
        deck={deck}
        language={lang}
      />
      <Controls>
        <Settings>
          <Button
            className="settings__button"
            inputMode={inputMode}
            handleClick={changeMode}
          >
            {inputMode === 'radio' ? '🔘' : '⌨️'}
          </Button>
          <Button className="settings__button" handleClick={restartGame}>
            ♻️
          </Button>
          <Button className="settings__button" handleClick={changeLang}>
            {lang === 'en' ? '🇬🇧' : '🇷🇺'}
          </Button>
        </Settings>
        <Form
          currentCard={currentCard}
          options={options}
          deck={deck}
          inputMode={inputMode}
          language={lang}
        />
      </Controls>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
