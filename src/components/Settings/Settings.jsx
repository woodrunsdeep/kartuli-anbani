import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
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

  const { t, i18n } = useTranslation();
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

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
      <div className="form__header">
        <h2 className="form__title">
          {t('settings.title')}
        </h2>
        <Button
          className="button--icon-only button--small"
          aria-label={t('settings.actions.close')}
          onClick={() => closeModal()}
        >
          <Icon iconName="X" aria-hidden="true" isFluid />
        </Button>
      </div>
      <fieldset className="form__fieldset">
        <div className="form__setting">
          <legend className="form__legend">
            {t('settings.language')}
          </legend>
          <select
            className="form__lang-select"
            name="language"
            id="language"
            defaultValue={language}
            onChange={(evt) => changeLanguage(evt.target.value)}
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
          <legend className="form__legend">
            {t('settings.theme')}
          </legend>
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
            {t('settings.deckOrder')}
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
            {t('settings.inputMode')}
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
          {t('settings.optionsQty')}
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
        <Button type="submit">
          {t('settings.actions.apply')}
        </Button>
        <Button type="reset" onClick={() => dispatch(reset())}>
          {t('settings.actions.reset')}
        </Button>
      </div>
    </form>
  );
}

export default Settings;
