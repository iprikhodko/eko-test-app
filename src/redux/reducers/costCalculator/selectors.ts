import { createSelector } from 'reselect';
import { IState } from '../../store';
import { ICostCalculatorPoint } from './types';

const getDeliveryPointIds = createSelector<IState, IState['costCalculator']['ids'], IState['costCalculator']['ids']>(
  ({ costCalculator }) => costCalculator.ids,
  ids => ids,
);

const getDeliveryPointData = createSelector<IState, IState['costCalculator']['data'], IState['costCalculator']['data']>(
  ({ costCalculator }) => costCalculator.data,
  data => data,
);

export const getDeliveryRoutesDataAsArray = createSelector<
  IState,
  ReturnType<typeof getDeliveryPointIds>,
  ReturnType<typeof getDeliveryPointData>,
  ICostCalculatorPoint[]
>(
  getDeliveryPointIds,
  getDeliveryPointData,
  (ids, data) =>
    ids.map(id => data[id])
);
