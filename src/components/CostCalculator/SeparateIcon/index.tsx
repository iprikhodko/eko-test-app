import React, { ComponentProps, FC } from 'react';
import { Container, LeftLine, RightLine } from './styled';

const SeparateIcon: FC<ComponentProps<typeof Container>> = props => {
  return (
    <Container {...props}>
      <LeftLine />
      <RightLine />
    </Container>
  );
};

export default SeparateIcon;
