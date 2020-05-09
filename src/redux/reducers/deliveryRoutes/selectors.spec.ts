import mainReducer from '../index';
import { addDeliveryPoint } from './actions';
import testInitialState from './exampleData';
import { getDeliveryCostForRoute, getPointsAsArray } from './selectors';
import { IDeliveryPoint } from './types';

describe('delivery routes selectors', () => {
  test('getDeliveryCostForRoute', () => {
    const routesWithCosts: [string[], number | null][] = [
      [['A', 'B', 'E'], 4],
      [['A', 'D'], 10],
      [['E', 'A', 'C', 'F'], 8],
      [['A', 'D', 'F'], null],
    ];

    routesWithCosts.forEach((routeWithCost) => {
      const [route, weight] = routeWithCost;
      const result = getDeliveryCostForRoute(testInitialState, { route });

      expect<ReturnType<typeof getDeliveryCostForRoute>>(result).toEqual(weight);
    });
  });

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

