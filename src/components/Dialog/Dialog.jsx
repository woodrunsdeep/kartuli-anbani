import './dialog.css';

export default function Dialog({ children, open }) {
  return (
    <dialog className="dialog" open={open}>{children}</dialog>
  );
}
