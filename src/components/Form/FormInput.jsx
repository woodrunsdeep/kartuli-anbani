function FormInput({ language }) {
  const labelText = language === 'en' ? 'Enter letter' : 'Введите букву';
  return (
    <label className="form__label">
      <span className="visually-hidden">{labelText}</span>
      <input
        className="form__input"
        type="text"
        name="option"
        required
        placeholder={labelText}
      />
    </label>
  );
}

export default FormInput;
