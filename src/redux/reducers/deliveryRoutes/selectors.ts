import { IDeliveryPoint, IDeliveryRoutesState } from './types';
import { getRouteId } from './utils';

// try to keep reselect signature just in case we will use it

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
