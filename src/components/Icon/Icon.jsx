import * as icons from 'react-bootstrap-icons';

function Icon({ iconName, size = 24, ...props }) {
  const BootstrapIcon = icons[iconName];
  return <BootstrapIcon size={size} {...props} />;
};

export default Icon;