import { IDeliveryPoint, IDeliveryRoute, IDeliveryRoutesState } from './types';
import { addDeliveryPoint, addDeliveryRoute, IDeliveryRoutesActions } from './actions';
import deliveryRoutesReducer from '.';
import { getRouteId } from './utils';

describe('delivery routes reducer', () => {
  let initialState: IDeliveryRoutesState;

  beforeEach(() => {
    // let's add some data for purity of the tests
    const firstTestPoint: IDeliveryPoint = {
      id: 'firstTestPoint',
      name: 'firstTestPoint',
    };
    const secondTestPoint: IDeliveryPoint = {
      id: 'secondTestPoint',
      name: 'secondTestPoint',
    };
    const testRoute: IDeliveryRoute = {
      from: firstTestPoint.id,
      to: secondTestPoint.id,
      weight: 10,
    };

    initialState = deliveryRoutesReducer({
      points: {
        [firstTestPoint.id]: firstTestPoint,
        [secondTestPoint.id]: secondTestPoint,
      },
      routes: {
        [getRouteId({ from: testRoute.from, to: testRoute.to })]: testRoute,
      },
    // @ts-ignore
    }, { type: '' });
  });

  test('initialState', () => {
    // @ts-ignore
    expect<IDeliveryRoutesState>(deliveryRoutesReducer(undefined, { type: '' })).toEqual({
      routes: {},
      points: {},
    });
  });

  test('ADD_DELIVERY_POINT', () => {
    const point = {
      id: 'A',
      name: 'A',
    };
    const action = addDeliveryPoint(point) as IDeliveryRoutesActions;

    const state = deliveryRoutesReducer(initialState, action);

    expect<IDeliveryRoutesState>(state).toEqual({
      ...initialState,
      points: {
        ...initialState.points,
        [point.id]: point,
      },
    });
  });

  test('ADD_DELIVERY_ROUTE', () => {
    const firstPoint = {
      id: 'A',
      name: 'A',
    };
    const secondPoint = {
      id: 'B',
      name: 'B',
    };
    const route = {
      from: firstPoint.id,
      to: secondPoint.id,
      weight: 12,
    };
    const action = addDeliveryRoute(route) as IDeliveryRoutesActions;

    initialState = {
      ...initialState,
      points: {
        ...initialState.points,
        [firstPoint.id]: firstPoint,
        [secondPoint.id]: secondPoint,
      },
    };

    const state = deliveryRoutesReducer(initialState, action);

    expect<IDeliveryRoutesState>(state).toEqual({
      ...initialState,
      routes: {
        ...initialState.routes,
        [getRouteId({ from: route.from, to: route.to })]: route,
      },
    });
  });
});
