import { useSelector } from 'react-redux';
import { selectSettings } from '../../slices/settingsSlice';
import Icon from '../Icon/Icon';
import FormRadio from './FormRadio';

export default function FormRadioSet({
  options,
  name,
  iconOnly,
  required,
  currentState,
  ...props
}) {
  const { language } = useSelector(selectSettings);

  return (
    <div className="form__radio-set">
      {Object.values(options).map((option) => {
        const value = Object.prototype.hasOwnProperty.call(option, 'name')
          ? option.name[language]
          : option.type;
        const id = Object.prototype.hasOwnProperty.call(option, 'id')
          ? option.id
          : option.type;
        return (
          <FormRadio
            className={iconOnly ? 'button-icon' : null}
            value={value}
            key={id}
            id={id}
            name={name}
            required={required}
            defaultChecked={currentState && option.type === currentState}
            {...props}
          >
            {iconOnly ? (
              <Icon iconName={option.icon} aria-hidden="true" />
            ) : (
              option.name[language]
            )}
          </FormRadio>
        );
      })}
    </div>
  );
}
