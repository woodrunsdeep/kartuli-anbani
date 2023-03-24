import './dialog.css';

export default function Dialog({ children, open, ...props }) {
  return (
    <dialog className="dialog" open={open} {...props}>{children}</dialog>
  );
}
