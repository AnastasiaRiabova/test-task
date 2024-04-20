import classnames from 'classnames';

export const Label = ({ className, id, label }) => {
  const Component = id ? 'label' : 'div';
  return (
    <Component className={classnames('text-grey-text', className)} htmlFor={id}>
      {label}
    </Component>
  );
};
