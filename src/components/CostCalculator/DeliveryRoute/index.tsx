import React, { ComponentProps, FC, useCallback } from 'react';
import {
  Container,
  LeftArrowLine,
  SeparateIcon,
  RightArrowLine,
} from './styled';

type IDeliveryRouteProps = {
  order: number;
  onPointAdd: (order: number) => void;
} & ComponentProps<typeof Container>;

const DeliveryRoute: FC<IDeliveryRouteProps> = props => {
  const {
    order,
    canBeSeparated,
    onPointAdd,
    ...otherProps
  } = props;

  const onClick = useCallback(() => onPointAdd(order), [order, onPointAdd]);

  return (
    <Container
      {...otherProps}
      title="Add delivery point"
      canBeSeparated={canBeSeparated}
      onClick={canBeSeparated ? onClick : undefined}
    >
      <LeftArrowLine />
      <SeparateIcon />
      <RightArrowLine />
    </Container>
  );
};

export default DeliveryRoute;
