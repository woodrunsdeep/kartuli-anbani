import clsx from 'clsx';
import {
  X,
  SortAlphaDown,
  SortAlphaDownAlt,
  Shuffle,
  Sliders,
  ArrowCounterclockwise,
  Sun,
  CircleHalf,
  Moon,
  UiRadiosGrid,
  InputCursorText,
} from 'react-bootstrap-icons';
import './icon.css';

const icons = {
  X,
  SortAlphaDown,
  SortAlphaDownAlt,
  Shuffle,
  Sliders,
  ArrowCounterclockwise,
  Sun,
  CircleHalf,
  Moon,
  UiRadiosGrid,
  InputCursorText,
};

function Icon({ iconName, isFluid, className, size = 24, ...props }) {
  const BootstrapIcon = icons[iconName];
  const classList = clsx('icon', { 'icon--fluid': isFluid }, className);
  return <BootstrapIcon className={classList} size={size} {...props} />;
}

export default Icon;
