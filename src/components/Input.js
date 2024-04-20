import classnames from 'classnames';
import { useControlledState } from '../utils/hooks/useControledState';
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
  // const [_value, setValue] = useControlledState(value, onChange);
  //
  // const handleChange = e => {
  //   const { value: nextValue } = e.currentTarget;
  //   setValue(nextValue);
  // };

  return (
    <div className={'flex flex-col gap-2 mt-2 relative'}>
      {label && <Label id={id} label={label} />}
      {icon}
      <input
        type={type}
        placeholder={name}
        onChange={e => onChange(e.currentTarget)}
        name={name}
        id={id}
        className={`p-2 rounded-[10px] bg-grey-lightGreyInput text-dark 
        ${icon ? 'pl-8' : ''} ${error ? 'border-red border' : ''} ${className}`}
        value={value}
        {...rest}
      />
      {error && (
        <span className={'text-red text-xs absolute -bottom-4'}>
          {error.message}
        </span>
      )}
    </div>
  );
};
