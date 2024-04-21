export const Button = ({
  type = 'button',
  className,
  onClick,
  children,
  variant = 'primary',
  ...rest
}) => {
  return (
    <button
      className={`rounded-[40px] px-[40px] py-[16px] ${className} ${
        variant === 'primary'
          ? 'text-white bg-red hover:bg-red-hover '
          : ' text-dark bg-white hover:border-red border-[1px]'
      }`}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};
