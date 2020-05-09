import React, { ComponentProps, FC } from 'react';
import {
  Container,
  LeftArrowLine,
  SeparateIcon,
  RightArrowLine,
  Weight,
} from './styled';

type IDeliveryRouteProps = {
  weight: number | null;
  onPointAdd: (order: number) => void;
} & ComponentProps<typeof Container>;

const DeliveryRoute: FC<IDeliveryRouteProps> = props => {
  const {
    canBeSeparated,
    weight,
    onPointAdd,
    ...otherProps
  } = props;

  return (
    <Container
      {...otherProps}
      title="Add delivery point"
      canBeSeparated={canBeSeparated}
      onClick={canBeSeparated ? onPointAdd : undefined}
    >
      <Weight>{weight}</Weight>
      <LeftArrowLine />
      <SeparateIcon />
      <RightArrowLine />
    </Container>
  );
};

export default DeliveryRoute;
