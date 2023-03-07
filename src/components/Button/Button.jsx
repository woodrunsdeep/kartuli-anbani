import './button.css';

function Button({
  type, className, children, handleClick, inputMode,
}) {
  const classList = className ? `${className} button` : 'button';
  return (
    <button
      type={type === 'button' ? 'button' : 'submit'}
      className={classList}
      onClick={handleClick}
      data-mode={inputMode}
    >
      {children}
    </button>
  );
}

export default Button;
