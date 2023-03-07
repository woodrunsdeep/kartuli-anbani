import ButtonRadio from './FormRadio';

function FormRadioGroup({ options, language }) {
  return (
    <div className="form__radio-group">
      {options.map((radio) => (
        <ButtonRadio radio={radio} key={radio.id} language={language} />
      ))}
    </div>
  );
}

export default FormRadioGroup;
