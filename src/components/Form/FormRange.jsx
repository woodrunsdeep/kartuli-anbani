export default function FormRange({
  min, max, defaultValue, id, name, ...props
}) {
  const dataListOptions = [];

  for (let i = min; i <= max; i++) {
    dataListOptions.push(<option value={i} key={i}>{i}</option>);
  }

  return (
    <div className="form__range-wrapper">
      <input
        className="form__range"
        type="range"
        name={name}
        id={id}
        defaultValue={defaultValue}
        min={min}
        max={max}
        list={id}
        {...props}
      />
      <datalist className="form__range-list" id={id}>{dataListOptions}</datalist>
    </div>
  );
}
