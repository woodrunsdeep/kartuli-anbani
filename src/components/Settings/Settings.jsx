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
} from '../../slices/settingsSlice';

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
      <h2 className="form__title">Game Settings</h2>
      <fieldset>
        <div className="form__options">
          <legend className="form__legend">Language</legend>
          <select name="language" id="language" defaultValue={language}>
            {languages.map((l) => (
              <option value={l} key={l}>{l}</option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form__options form__options--row">
          <legend className="form__legend">Input Mode</legend>
          {Object.values(inputModes).map((mode) => (
            <FormRadio
              value={mode.type}
              key={mode.type}
              id={mode.type}
              label={mode.icon}
              name="inputMode"
              defaultChecked={mode.type === inputMode}
              onChange={(evt) => dispatch(setInputMode(evt.target.value))}
            />
          ))}
        </div>
      </fieldset>
      <fieldset className="form__radio-options" disabled={inputMode === 'text' ? true : null}>
        <legend className="form__legend">Options Number</legend>
        <FormRange
          min={inputModes.radio.min}
          max={inputModes.radio.max}
          name="optionsQty"
          defaultValue={optionsQty}
          id="optionsQty"
        />
      </fieldset>
      <fieldset className="form__setting">
        <div className="form__options form__options--column">
          <legend className="form__legend">Deck Order</legend>
          <div className="form__set">
            {Object.values(deckOrderOptions).map((option) => (
              <FormRadio
                value={option.type}
                key={option.type}
                id={option.type}
                label={option.label}
                name="deckOrder"
                defaultChecked={option.type === deckOrder}
              />
            ))}
          </div>
        </div>
      </fieldset>
      <fieldset className="form__setting">
        <div className="form__options form__options--column">
          <legend className="form__legend">Theme</legend>
          <div className="form__set">
            {Object.values(themes).map((option) => (
              <FormRadio
                value={option.type}
                key={option.type}
                id={option.type}
                label={option.icon}
                name="theme"
                defaultChecked={option.type === theme}
              />
            ))}
          </div>
        </div>
      </fieldset>
      <div className="form__actions form__set">
        <Button type="submit">Save</Button>
        <Button type="reset">Reset</Button>
        <Button onClick={() => dispatch(setVisibility(false))}>Cancel</Button>
      </div>
    </form>
  );
}

export default Settings;
