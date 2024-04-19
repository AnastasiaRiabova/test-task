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
          ? 'text-white bg-customRed hover:bg-customRed-hover '
          : ' text-customDark bg-white hover:border-customRed border-[1px]'
      }`}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};
