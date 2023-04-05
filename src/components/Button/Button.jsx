import clsx from 'clsx';
import './button.css';

function Button({
  type, className, children, ...props
}) {
  return (
    <button
      type={type || 'button'}
      className={clsx('button', className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
