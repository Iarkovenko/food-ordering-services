import React from 'react';

const UserMenu = ({
  logoWidth = '15px',
  logoHeight = '15px',
  alt = 'user logo',
  srcUserLogo,
  userLogin = 'Bob Ross',
}) => (
  <div>
    <div>
      <img alt={alt} src={srcUserLogo} width={logoWidth} height={logoHeight} />
      <span>{userLogin}</span>
    </div>
  </div>
);

export default UserMenu;
