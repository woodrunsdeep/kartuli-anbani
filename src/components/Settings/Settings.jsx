import { useSelector, useDispatch } from 'react-redux';
import Button from '../Button/Button';
import FormRadio from '../Form/FormRadio';
import FormRange from '../Form/FormRange';
import {
  setInputMode,
  selectSettings,
  setVisibility,
  saveSettings,
  reset,
  setTheme,
  setLanguage,
} from '../../slices/settingsSlice';
import Icon from '../Icon/Icon';

function Settings() {
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

  return (
    <form
      className="form form__settings"
      method="dialog"
      onSubmit={(evt) => {
        evt.preventDefault();
        const data = Object.fromEntries(new FormData(evt.target));
        dispatch(setVisibility(false));
        dispatch(saveSettings(data));
      }}
    >
      <h2 className="form__title">{language === 'en' ? 'Game Settings' : 'Настройки игры'}</h2>
      <fieldset>
        <div className="form__setting">
          <legend className="form__legend">{language === 'en' ? 'Language' : 'Язык'}</legend>
          <select name="language" id="language" defaultValue={language} onChange={(evt) => dispatch(setLanguage(evt.target.value))}>
            {languages.map((l) => (
              <option value={l} key={l}>{l}</option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form__setting">
          <legend className="form__legend">{language === 'en' ? 'Theme' : 'Тема'}</legend>
          <div className="form__set">
            {Object.values(themes).map((option) => (
              <FormRadio
                value={option.type}
                key={option.type}
                id={option.type}
                label={option.icon}
                name="theme"
                defaultChecked={option.type === theme}
                onChange={(evt) => dispatch(setTheme(evt.target.value))}
              >
                <Icon iconName={option.icon} />
              </FormRadio>
            ))}
          </div>
        </div>
      </fieldset>
      <fieldset>
        <div className="form__setting">
          <legend className="form__legend">{language === 'en' ? 'Input Mode' : 'Режим ввода'}</legend>
          <div className="form__set">
            {Object.values(inputModes).map((mode) => (
              <FormRadio
                value={mode.type}
                key={mode.type}
                id={mode.type}
                label={mode.icon}
                name="inputMode"
                defaultChecked={mode.type === inputMode}
                onChange={(evt) => dispatch(setInputMode(evt.target.value))}
              >
                <Icon iconName={mode.icon} />
              </FormRadio>
            ))}
          </div>
        </div>
      </fieldset>
      <fieldset className="form__radio-options" disabled={inputMode === 'text' ? true : null}>
        <legend className="form__legend">{language === 'en' ? 'Options Number' : 'Количество вариантов'}</legend>
        <FormRange
          min={inputModes.radio.min}
          max={inputModes.radio.max}
          name="optionsQty"
          defaultValue={optionsQty}
          id="optionsQty"
        />
      </fieldset>
      <fieldset>
        <div className="form__setting">
          <legend className="form__legend">{language === 'en' ? 'Deck Order' : 'Сортировка'}</legend>
          <div className="form__set">
            {Object.values(deckOrderOptions).map((option) => (
              <FormRadio
                value={option.type}
                key={option.type}
                id={option.type}
                label={option.label[language]}
                name="deckOrder"
                defaultChecked={option.type === deckOrder}
              >
                <Icon iconName={option.icon} />
              </FormRadio>
            ))}
          </div>
        </div>
      </fieldset>
      <div className="form__actions">
        <Button type="submit">{language === 'en' ? 'Ok' : 'Ок'}</Button>
        <Button type="reset" onClick={() => dispatch(reset())}>{language === 'en' ? 'Reset' : 'Сброс'}</Button>
        <Button onClick={() => dispatch(setVisibility(false))}>{language === 'en' ? 'Cancel' : 'Отмена'}</Button>
      </div>
    </form>
  );
}

export default Settings;
