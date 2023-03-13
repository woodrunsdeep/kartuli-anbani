import './button.css';

function Button({
  type, className, children, ...props
}) {
  const classList = className ? `${className} button` : 'button';
  return (
    <button
      type={type || 'button'}
      className={classList}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
