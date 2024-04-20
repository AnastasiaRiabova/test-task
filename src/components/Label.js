import classnames from 'classnames';

export const Label = ({ className, id, label }) => {
  const Component = id ? 'label' : 'div';
  return (
    <Component
      className={classnames('text-customGrey-text', className)}
      htmlFor={id}
    >
      {label}
    </Component>
  );
};
