import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

const ICONS = {
  arrowDown: (
    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="311" viewBox="0 0 512 311">
      <path d="m4.667739,39.896818l2.880008,3.405552l217.600581,253.794677c7.36002,8.594964 18.400049,13.946545 30.720082,13.946545c12.320033,0 23.360062,-5.51375 30.720082,-13.946545l217.44058,-253.30817l3.68001,-4.216397c2.720007,-4.054228 4.320012,-8.919302 4.320012,-14.108714c0,-14.108714 -11.840032,-25.622721 -26.560071,-25.622721l0,0l-458.881225,0l0,0c-14.720039,0 -26.560071,11.514008 -26.560071,25.622721c0,5.351581 1.760005,10.378824 4.640012,14.433052z" />
    </svg>
  ),
  arrowLineRight: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 48" width="26" height="48">
      <path d="M1.817 47.942L.273 46.398l22.509-22.4L.272 1.6 1.818.055l23.944 23.944z" />
    </svg>
  ),
  cross: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
      <path d="M46.42.077L24.125 22.454 1.747.077.234 1.59 22.53 23.967.234 46.343l1.513 1.513L24.124 25.48 46.42 47.856l1.592-1.513-22.376-22.376L48.013 1.59z" />
    </svg>
  ),
};

const Container = styled.span`
  display: inline-block;
  line-height: 0;

  svg {
    height: 100%;
    width: 100%;
  }

  svg * {
    fill: currentColor;
  }
`;

interface IIconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'name'> {
  name: keyof typeof ICONS;
}

const Icon: FC<IIconProps> = props => {
  const { name, ...otherProps } = props;

  return (
    <Container {...otherProps}>
      {ICONS[name]}
    </Container>
  );
};

export default Icon;
