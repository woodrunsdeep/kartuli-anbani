import { forwardRef } from 'react';
import './dialog.css';

const Dialog = forwardRef(({ children, ...props }, ref) => (
  <dialog className="dialog" ref={ref} {...props}>
    {children}
  </dialog>
));

export default Dialog;
