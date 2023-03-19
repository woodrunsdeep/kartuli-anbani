function FormRadio({
  value, label, id, name, ...props
}) {
  return (
    <div className="form__radio-box">
      <input
        type="radio"
        className="form__radio visually-hidden"
        name={name}
        id={id}
        value={value}
        required
        {...props}
      />
      <label htmlFor={id} className="form__radio-label button">
        {label}
      </label>
    </div>
  );
}

export default FormRadio;
