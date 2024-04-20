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
    <div className={classnames('flex flex-col gap-2 mt-2 relative')}>
      {label && <Label id={id} label={label} />}
      {icon}
      <textarea
        rows={rows}
        name={name}
        id={id}
        className={classnames(
          'p-2 rounded-[10px] bg-grey-lightGrey text-dark',
          {
            ['pl-8']: icon,
          },
          className
        )}
        value={_value}
        placeholder={name}
        onChange={handleChange}
        {...rest}
      />
    </div>
  );
};
