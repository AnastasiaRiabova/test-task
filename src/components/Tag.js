import { Icon } from './Icon';
export const Tag = ({
  type = 'button',
  className,
  onClick,
  text,
  variant = 'secondary',
  icon,
  ...rest
}) => {
  return (
    <div
      className={`rounded-[30px] py-1 px-4 bg-grey-lightGrey text-dark flex items-center justify-center gap-2 ${className}`}
      onClick={onClick}
      {...rest}
    >
      <Icon icon={icon} fill={'none'} stroke={'none'} />
      {text}
    </div>
  );
};
