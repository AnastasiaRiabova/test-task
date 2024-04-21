import { useControlledState } from '../utils/hooks/useControledState';
import classnames from 'classnames';
import { Label } from './Label';

export const TextArea = ({
  className,
  name,
  id,
  value = '',
  label,
  icon,
  onChange,
  rows,
  ...rest
}) => {
  const [_value, setValue] = useControlledState(value, onChange);

  const handleChange = e => {
    const { value: nextValue } = e.currentTarget;
    setValue(nextValue);
  };

  return (
    <div className={'flex flex-col gap-2 mt-2 relative'}>
      {label && <Label id={id} label={label} />}
      {icon}
      <textarea
        rows={rows}
        name={name}
        id={id}
        className={`p-2 rounded-[10px] bg-grey-lightGreyInput text-dark'
          ${icon ? 'pl-8' : ''} ${className}`}
        value={_value}
        placeholder={name}
        onChange={handleChange}
        {...rest}
      />
    </div>
  );
};
