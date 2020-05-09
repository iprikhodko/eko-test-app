import { createSelector } from 'reselect';
import { IState } from '../store';
import { getDeliveryRoutesDataAsArray } from './costCalculator/selectors';
import { getRouteId } from './deliveryRoutes/utils';

export const getCostCalculatorRoutes = createSelector<
  IState,
  IState['deliveryRoutes']['points'],
  IState['deliveryRoutes']['routes'],
  ReturnType<typeof getDeliveryRoutesDataAsArray>,
  (ReturnType<typeof getDeliveryRoutesDataAsArray>[number] & {
    weight: number | null,
  })[]
>(
  ({ deliveryRoutes }) => deliveryRoutes.points,
  ({ deliveryRoutes }) => deliveryRoutes.routes,
  getDeliveryRoutesDataAsArray,
  (points, routes, multipleRoute) =>
    multipleRoute.map((point, index) => {
      const { pointId } = point;

      if (index === 0) {
        return {
          ...point,
          weight: 0,
        };
      }

      const { pointId: prevPointId } = multipleRoute[index - 1];

      if (!points[pointId || ''] || !points[prevPointId || '']) {
        return {
          ...point,
          weight: null,
        };
      }

      if (pointId === prevPointId) {
        return {
          ...point,
          weight: 0,
        };
      }

      const routeId = getRouteId({
        from: prevPointId as string,
        to: pointId as string,
      });
      const route = routes[routeId];

      if (!route) {
        return {
          ...point,
          weight: null,
        };
      }

      return {
        ...point,
        weight: route.weight,
      };
    }),
);

export const getCostCalculatorError = createSelector<IState, ReturnType<typeof getCostCalculatorRoutes>, string>(
  getCostCalculatorRoutes,
  routes => {
    let error = '';

    routes.every(({ weight, pointId }) => {
      if (weight === null) {
        if (!pointId) {
          error = 'You must finish route by filling all its points to get delivery cost';
        } else {
          error = 'No such route'
        }

        return false;
      }

      return true;
    });

    return error;
  }
);

export const getCostCalculatorResult = createSelector<IState, ReturnType<typeof getCostCalculatorRoutes>, number | null>(
  getCostCalculatorRoutes,
  (routes) => {
    let result: number | null = 0;

    routes.every(({ weight }) => {
      if (weight === null) {
        result = null;
        return false;
      }

      (result as number) += weight;

      return true;
    });

    return result;
  }
);
