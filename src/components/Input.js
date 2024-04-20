import classnames from 'classnames';
import { useControlledState } from '../utils/hooks/useControledState';
import { useCallback } from 'react';
import { Label } from './Label';

export const Input = ({
  type = 'text',
  className,
  name,
  id,
  value = '',
  label,
  icon,
  onChange,
  error,
  ...rest
}) => {
  const [_value, setValue] = useControlledState(value, onChange);

  const handleChange = e => {
    const { value: nextValue } = e.currentTarget;
    setValue(nextValue);
  };

  return (
    <div className={classnames('flex flex-col gap-2 mt-2 relative')}>
      {label && <Label id={id} label={label} />}
      {icon}
      <input
        type={type}
        name={name}
        id={id}
        className={classnames(
          'p-2 rounded-[10px] bg-customGrey-lightGreyInput text-customDark',
          {
            ['pl-8']: icon,
            ['border-customRed border']: error,
          },
          className
        )}
        value={_value}
        placeholder={name}
        aria-label={'input-' + name}
        onChange={handleChange}
        {...rest}
      />
      {error && (
        <span className={'text-customRed text-xs absolute -bottom-4'}>
          {error.message}
        </span>
      )}
    </div>
  );
};
