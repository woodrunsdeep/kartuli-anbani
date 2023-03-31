import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import Button from '../Button/Button';
import FormRange from '../Form/FormRange';
import {
  selectSettings,
  setVisibility,
  saveSettings,
  reset,
  setTheme,
  setLanguage,
} from '../../slices/settingsSlice';
import Icon from '../Icon/Icon';
import '../../styles/button-icon.css';
import FormRadioSet from '../Form/FormRadioSet';

function Settings({ closeModal }) {
  const {
    inputMode,
    optionsQty,
    inputModes,
    language,
    languages,
    deckOrder,
    deckOrderOptions,
    themes,
    theme,
  } = useSelector(selectSettings);
  const dispatch = useDispatch();

  const [isInputRadio, setIsInputRadio] = useState(inputMode === 'radio');

  return (
    <form
      className="form form__settings"
      method="dialog"
      onSubmit={(evt) => {
        evt.preventDefault();
        const data = Object.fromEntries(new FormData(evt.target));
        closeModal();
        dispatch(saveSettings(data));
      }}
    >
      <h2 className="form__title">
        {language === 'en' ? 'Game Settings' : 'Настройки игры'}
      </h2>
      <Button
        className="button-icon button-icon--small"
        aria-label={language === 'en' ? 'Close settings' : 'Закрыть настройки'}
        onClick={() => closeModal()}
      >
        <Icon iconName="X" aria-hidden="true" />
      </Button>
      <fieldset className="form__fieldset">
        <div className="form__setting">
          <legend className="form__legend">
            {language === 'en' ? 'Language' : 'Язык'}
          </legend>
          <select
            className="form__lang-select"
            name="language"
            id="language"
            defaultValue={language}
            onChange={(evt) => dispatch(setLanguage(evt.target.value))}
          >
            {languages.map((l) => (
              <option value={l} key={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset className="form__fieldset">
        <div className="form__setting">
          <legend className="form__legend">{language === 'en' ? 'Theme' : 'Тема'}</legend>
          <FormRadioSet
            currentState={theme}
            options={themes}
            name="theme"
            iconOnly
            onChange={(evt) => dispatch(setTheme(evt.target.value))}
          />
        </div>
      </fieldset>
      <fieldset className="form__fieldset">
        <div className="form__setting">
          <legend className="form__legend">
            {language === 'en' ? 'Deck Order' : 'Сортировка'}
          </legend>
          <FormRadioSet
            currentState={deckOrder}
            options={deckOrderOptions}
            name="deckOrder"
            iconOnly
          />
        </div>
      </fieldset>
      <fieldset className="form__fieldset">
        <div className="form__setting">
          <legend className="form__legend">
            {language === 'en' ? 'Input Mode' : 'Способ ввода'}
          </legend>
          <FormRadioSet
            currentState={inputMode}
            options={inputModes}
            name="inputMode"
            iconOnly
            onChange={() => setIsInputRadio((state) => !state)}
          />
        </div>
      </fieldset>
      <fieldset className="form__fieldset" disabled={isInputRadio ? null : true}>
        <legend className="form__legend">
          {language === 'en' ? 'Options Number' : 'Количество вариантов'}
        </legend>
        <FormRange
          min={inputModes.radio.min}
          max={inputModes.radio.max}
          name="optionsQty"
          defaultValue={optionsQty}
          id="optionsQty"
        />
      </fieldset>
      <div className="form__actions">
        <Button type="submit">{language === 'en' ? 'Apply' : 'Применить'}</Button>
        <Button type="reset" onClick={() => dispatch(reset())}>
          {language === 'en' ? 'Reset' : 'Сбросить'}
        </Button>
      </div>
    </form>
  );
}

export default Settings;
