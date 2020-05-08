import testInitialState from './exampleData';
import { getDeliveryCostForRoute } from './selectors';

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
});

