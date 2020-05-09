import { createSelector } from 'reselect';
import { IState } from '../../store';
import { IDeliveryPoint, IDeliveryRoutesState } from './types';
import { getRouteId } from './utils';

const getPoints = createSelector<IState, IState['deliveryRoutes']['points'], IState['deliveryRoutes']['points']>(
  ({ deliveryRoutes }) => deliveryRoutes.points,
  points => points,
);

export const getPointsAsArray = createSelector<IState, ReturnType<typeof getPoints>, IDeliveryPoint[]>(
  getPoints,
  points => Object.values(points),
);

export const getDeliveryCostForRoute = (state: IDeliveryRoutesState, ownProps: {
  route: IDeliveryPoint['id'][];
}) => {
  const { points, routes } = state;
  const { route: currRoutes } = ownProps;
  let result: number | null = 0;

  currRoutes.every((pointId, index) => {
    if (!points[pointId]) {
      result = null;
      return false;
    }

    if (index === 0) {
      return true;
    }

    const prevPointId = currRoutes[index - 1];
    const routeId = getRouteId({
      from: prevPointId,
      to: pointId,
    });
    const route = routes[routeId];

    if (!route) {
      result = null;
      return false;
    }

    // @ts-ignore
    result = result + route.weight;

    return true;
  }, 0);

  return result;
};
