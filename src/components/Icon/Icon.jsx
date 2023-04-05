import clsx from 'clsx';
import * as icons from 'react-bootstrap-icons';
import './icon.css';

function Icon({
  iconName, isFluid, className, size = 24, ...props
}) {
  const BootstrapIcon = icons[iconName];
  const classList = clsx('icon', { 'icon--fluid': isFluid }, className);
  return <BootstrapIcon className={classList} size={size} {...props} />;
}

export default Icon;
