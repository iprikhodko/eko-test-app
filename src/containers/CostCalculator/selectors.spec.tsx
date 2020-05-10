import { addDeliveryPoint, ICostCalculatorActions } from '../../redux/reducers/costCalculator/actions';
import testInitialState from '../../redux/reducers/deliveryRoutes/mockState';
import { IState } from '../../redux/store';
import mainReducer from '../../redux/reducers';
import { getCostCalculatorResult, getCostCalculatorError, getCostCalculatorRoutes } from './selectors';

describe('cost calculator selectors', () => {
  let state: IState;

  beforeEach(() => {
    // @ts-ignore
    state = mainReducer(undefined, { type: '' });

    state = {
      ...state,
      deliveryRoutes: testInitialState,
    };
  });

  test('getCostCalculatorRoutes', () => {
    const routesWithCosts: [string[], number | null][] = [
      [['A', 'B', 'E'], 4],
      [['A', 'D'], 10],
      [['E', 'A', 'C', 'F'], 8],
      [['A', 'D', 'F'], null],
    ];

    routesWithCosts.forEach(([points, cost]) => {
      let testState = state;

      points.forEach(pointId => {
        testState = mainReducer(testState, addDeliveryPoint({ pointId }) as ICostCalculatorActions);
      });

      expect<number | null>(getCostCalculatorResult(testState)).toEqual(cost);
    });
  });

  test('getCostCalculatorError', () => {
    const routesWithErrorIndicator: [(string | null)[], boolean][] = [
      [[], false],
      [['A'], false], // no error, because not enough data
      [['A', 'D', 'F'], true], // error, no such route
      [['A', null, 'F'], true], // error, because of gap
    ];

    routesWithErrorIndicator.forEach(([points, hasError]) => {
      let testState = state;

      points.forEach(pointId => {
        testState = mainReducer(testState, addDeliveryPoint({ pointId: pointId as string }) as ICostCalculatorActions);
      });

      expect<boolean>(!!getCostCalculatorError(testState)).toEqual(hasError);
    });
  });

  test('getCostCalculatorRoutes', () => {
    const route = ['E', 'A', 'D', null, 'C', 'F'];

    route.forEach(pointId => {
      state = mainReducer(state, addDeliveryPoint({ pointId: pointId as string }) as ICostCalculatorActions);
    });

    const result = getCostCalculatorRoutes(state);

    expect<ReturnType<typeof getCostCalculatorRoutes>>(result).toMatchObject([{
      pointId: 'E',
      weight: 0,
    }, {
      pointId: 'A',
      weight: 2,
    }, {
      pointId: 'D',
      weight: 10,
    }, {
      pointId: null,
      weight: null,
    }, {
      pointId: 'C',
      weight: null,
    }, {
      pointId: 'F',
      weight: 2,
    }]);
  });
});