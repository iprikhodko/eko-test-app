import mainReducer from '../index';
import { addDeliveryPoint } from './actions';
import { getPointsAsArray } from './selectors';
import { IDeliveryPoint } from './types';

describe('delivery routes selectors', () => {
  test('getPointsAsArray', () => {
    const firstPoint = {
      id: 'A',
      name: 'A',
    };
    const secondPoint = {
      id: 'B',
      name: 'B',
    };

    // @ts-ignore
    let state = mainReducer(undefined, { type: '' });
    // @ts-ignore
    state = mainReducer(state, addDeliveryPoint(secondPoint));
    // @ts-ignore
    state = mainReducer(state, addDeliveryPoint(firstPoint));

    expect<IDeliveryPoint[]>(getPointsAsArray(state)).toEqual([secondPoint, firstPoint]);
  });
});

