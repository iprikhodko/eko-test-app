import React, { ComponentProps, FC } from 'react';
import { Container, Line, ArrowIcon } from './styled';

type IArrowLineProps = ComponentProps<typeof Container>;

const ArrowLine: FC<IArrowLineProps> = props => (
  <Container {...props}>
    <Line />
    <ArrowIcon />
  </Container>
);

export default ArrowLine;
