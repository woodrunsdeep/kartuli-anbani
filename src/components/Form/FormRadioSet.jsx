import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { selectSettings } from '../../slices/settingsSlice';
import Icon from '../Icon/Icon';
import FormRadio from './FormRadio';

export default function FormRadioSet({
  options,
  name,
  iconOnly,
  required,
  currentState,
  className,
  ...props
}) {
  const { language } = useSelector(selectSettings);
  const classList = clsx('form__radio-set', className);

  return (
    <div className={classList}>
      {Object.values(options).map((option) => {
        const value = Object.prototype.hasOwnProperty.call(option, 'name')
          ? option.name[language]
          : option.type;
        const id = Object.prototype.hasOwnProperty.call(option, 'id')
          ? option.id
          : option.type;
        return (
          <FormRadio
            className={clsx({ 'button--icon-only': iconOnly })}
            value={value}
            key={id}
            id={id}
            name={name}
            required={required}
            defaultChecked={currentState && option.type === currentState}
            {...props}
          >
            {iconOnly ? (
              <>
                <Icon iconName={option.icon} aria-hidden="true" />
                <span className="visually-hidden">{value}</span>
              </>
            ) : (
              option.name[language]
            )}
          </FormRadio>
        );
      })}
    </div>
  );
}
