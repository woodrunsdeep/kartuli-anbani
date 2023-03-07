function FormInput({ onInputChange, language }) {
  return (
    <label className="form__label">
      <input
        className="form__input"
        type="text"
        name="option"
        required
        placeholder={language === 'en' ? 'Enter letter' : 'Введите букву'}
        onChange={onInputChange}
      />
    </label>
  );
}

export default FormInput;
