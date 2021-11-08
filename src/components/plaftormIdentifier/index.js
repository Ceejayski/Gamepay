import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const WindowsIcon = () => <i className="fab fa-windows" />;
const AppleIcon = () => <i className="fab fa-apple" />;
const LinuxIcon = () => <i className="fab fa-linux" />;

function PlatformIdentifier({ platform }) {
  return (
    <div className="platform-icon">
      <span className="me-2">Avialable on: </span>
      {platform.windows && (
        <span className="me-2">
          <WindowsIcon />
        </span>
      )}
      {platform.mac && (
        <span className="me-2">
          <AppleIcon />
        </span>
      )}
      {platform.linux && (
        <span className="me-2">
          <LinuxIcon />
        </span>
      )}
    </div>
  );
}

PlatformIdentifier.propTypes = {
  platform: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};

export default PlatformIdentifier;
