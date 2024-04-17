import { ReactSVG } from 'react-svg';

export const Icon = ({
  className,
  onClick,
  width = '20px',
  height = '20px',
  fill = 'currentColor',
  stroke = 'currentColor',
  icon,
  ...rest
}) => {
  return (
    <ReactSVG
      src={icon}
      beforeInjection={svg => {
        svg.classList.add(className);
        svg.setAttribute(
          'style',
          `width: ${width}; height: ${height}; fill: ${fill}; stroke: ${stroke}`
        );
      }}
      {...rest}
    />
  );
};
