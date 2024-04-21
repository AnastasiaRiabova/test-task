export const FilterButton = ({
  type = 'button',
  className,
  onClick,
  children,
  icon,
  selected,
  ...rest
}) => {
  return (
    <button
      type={type}
      className={`flex flex-col items-center justify-center h-[95px] w-[105px] hover:border-red text-dark border-[1px] rounded-[10px]  
        ${selected ? 'border-red ' : ''} ${className}`}
      onClick={onClick}
      {...rest}
    >
      <div className="pb-[8px]">{icon}</div>
      {children}
    </button>
  );
};
