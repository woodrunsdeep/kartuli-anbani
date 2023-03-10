import ButtonRadio from './FormRadio';

function FormRadioGroup({ options }) {
  return (
    <div className="form__radio-group">
      {options.map((radio) => (
        <ButtonRadio radio={radio} key={radio.id} />
      ))}
    </div>
  );
}

export default FormRadioGroup;
