function FormRadio({ value, id, name }) {
  return (
    <div className="form__radio-box">
      <input
        type="radio"
        className="form__radio visually-hidden"
        name={name}
        id={id}
        value={value}
        required
      />
      <label htmlFor={id} className="form__radio-label button">
        {value}
      </label>
    </div>
  );
}

export default FormRadio;
