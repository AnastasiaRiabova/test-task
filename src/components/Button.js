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
      className={`rounded-[20px] h-[40px]  w-[200px] p-1 ${className} ${
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
