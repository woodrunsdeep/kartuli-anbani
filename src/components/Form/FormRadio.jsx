function FormRadio({
  children, value, label, id, name, className, required, ...props
}) {
  let labelClassList = 'form__radio-label button';
  labelClassList = className ? `${labelClassList} ${className}` : labelClassList;

  return (
    <div className="form__radio-box">
      <input
        type="radio"
        className="form__radio visually-hidden"
        name={name}
        id={id}
        value={value}
        required={required}
        {...props}
      />
      <label htmlFor={id} className={labelClassList}>
        {children}
      </label>
    </div>
  );
}

export default FormRadio;
