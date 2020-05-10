import { createSelector } from 'reselect';
import { IState } from '../../store';
import { IDeliveryPoint } from './types';

export const getPoints = createSelector<IState, IState['deliveryRoutes']['points'], IState['deliveryRoutes']['points']>(
  ({ deliveryRoutes }) => deliveryRoutes.points,
  points => points,
);

export const getRoutes = createSelector<IState, IState['deliveryRoutes']['routes'], IState['deliveryRoutes']['routes']>(
  ({ deliveryRoutes }) => deliveryRoutes.routes,
  routes => routes,
);

export const getPointsAsArray = createSelector<IState, ReturnType<typeof getPoints>, IDeliveryPoint[]>(
  getPoints,
  points => Object.values(points),
);
