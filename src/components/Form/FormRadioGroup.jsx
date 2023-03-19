import FormRadio from './FormRadio';

function FormRadioGroup({ options, name, language }) {
  return (
    <div className="form__radio-group">
      {options.map((radio) => (
        <FormRadio
          value={radio.name[language]}
          id={radio.id}
          key={radio.id}
          label={radio.name[language]}
          name={name}
        />
      ))}
    </div>
  );
}

export default FormRadioGroup;
