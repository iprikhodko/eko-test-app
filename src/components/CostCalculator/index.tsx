import React, { FC } from 'react';
import { IDeliveryPoint } from '../../redux/reducers/deliveryRoutes/types';
import {
  Container,
  DeliveryPoint,
  Title,
  RouteWrapper,
  Subtext,
} from './styled';

type ICostCalculator = {
  routes: IDeliveryPoint[];
};

const partRoutes = [{
  point: null,
  weight: null,
}, {
  point: null,
  weight: null,
}] as const;

const CostCalculator: FC<ICostCalculator> = props => {
  const { routes } = props;

  return (
    <Container>
      <Title>
        Delivery cost calculator
      </Title>
      <RouteWrapper>
        {partRoutes.map(({ point }, index) => (
          <DeliveryPoint
            key={index}
            isRemovable
            canBeSeparated
            isRouteShown={index !== 0}
            points={[]}
            pointId={point}
            weight={1}
            order={1}
            onChange={() => undefined}
            onInsert={() => undefined}
            onRemove={() => undefined}
          />
        ))}
      </RouteWrapper>
      <Subtext>
        Please, choose at least one route to calculate delivery cost
      </Subtext>
    </Container>
  );
};

export default CostCalculator;
