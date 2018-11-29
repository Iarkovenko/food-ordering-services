import React from 'react';

const Logo = ({
  srcLogo,
  logoWidth = '25px',
  logoHeight = '25px',
  logoAlt = 'mainLogo',
}) => (
  <div>
    <a href="/">
      <img src={srcLogo} width={logoWidth} height={logoHeight} alt={logoAlt} />
    </a>
  </div>
);

export default Logo;
