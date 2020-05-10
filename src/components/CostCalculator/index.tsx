import React, { ComponentProps, FC, useCallback } from 'react';
import { ICostCalculatorPoint } from '../../redux/reducers/costCalculator/types';
import { IDeliveryPoint } from '../../redux/reducers/deliveryRoutes/types';
import BaseDeliveryRoute from './DeliveryRoute';
import {
  Container,
  DeliveryPoint,
  Title,
  RouteWrapper,
  Subtext,
  ResetButton,
} from './styled';

type ICostCalculatorProps = {
  routes: (ICostCalculatorPoint & { weight: number | null })[];
  points: IDeliveryPoint[];
  result: number | null;
  error: string;
  onAdd: (args: { pointId: IDeliveryPoint['id'] }) => void;
  onReset: () => void;
} & Pick<ComponentProps<typeof BaseDeliveryRoute>, 'onChange' | 'onInsert' | 'onRemove'>;

const CostCalculator: FC<ICostCalculatorProps> = props => {
  const {
    points,
    routes,
    result,
    error,
    onAdd,
    onChange,
    onInsert,
    onRemove,
    onReset,
  } = props;

  const onPointAdd = useCallback(({ pointId }) => onAdd({ pointId }),[onAdd]);

  let content;

  if (routes.length < 2) {
    content = 'Please, choose at least one route to calculate delivery cost';
  } else if (error) {
    content = error;
  } else {
    content = `Delivery cost for provided route is ${result}`;
  }

  return (
    <Container>
      <Title>
        Delivery cost calculator
      </Title>
      <RouteWrapper>
        {routes.map(({ id, pointId, weight }, index) => (
          <DeliveryPoint
            key={id}
            routeId={id}
            isRemovable
            canBeSeparated
            isRouteShown={index !== 0}
            points={points}
            pointId={pointId}
            weight={weight}
            onChange={onChange}
            onInsert={onInsert}
            onRemove={onRemove}
          />
        ))}
        <DeliveryPoint
          isRouteShown={routes.length !== 0}
          points={points}
          pointId={null}
          onChange={onPointAdd}
        />
        <ResetButton
          type="button"
          onClick={onReset}
        >
          Reset
        </ResetButton>
      </RouteWrapper>
      <Subtext isError={!!error}>
        {content}
      </Subtext>
    </Container>
  );
};

export default CostCalculator;
