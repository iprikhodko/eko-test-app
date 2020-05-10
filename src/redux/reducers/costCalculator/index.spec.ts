import costCalculatorReducer from '.';
import {
  addDeliveryPoint,
  changeDeliveryPoint,
  ICostCalculatorActions,
  insertDeliveryPoint,
  removeDeliveryPoint, resetDeliveryRoute,
} from './actions';
import { ICostCalculatorPoint, ICostCalculatorState } from './types';

describe('costCalculatorReducer', () => {
  const firstPoint: ICostCalculatorPoint = {
    id: '1',
    pointId: '2'
  };
  const secondPoint: ICostCalculatorPoint = {
    id: '3',
    pointId: '4'
  };
  let initialState: ICostCalculatorState;

  beforeEach(() => {
    initialState = {
      ids: [firstPoint.id, secondPoint.id],
      data: {
        [firstPoint.id]: firstPoint,
        [secondPoint.id]: secondPoint,
      },
    };
  });

  test('initial state', () => {
    // @ts-ignore
    const state = costCalculatorReducer(undefined, { type: '' });

    expect<ICostCalculatorState>(state).toEqual({
      ids: [],
      data: {},
    });
  });

  test('COST_CALCULATOR_ADD_POINT', () => {
    const pointId = '5';
    const state = costCalculatorReducer(initialState, addDeliveryPoint({
      pointId,
    }) as ICostCalculatorActions);
    const id = state.ids[state.ids.length - 1];

    expect<ICostCalculatorState>(state).toEqual({
      ...initialState,
      ids: [
        ...initialState.ids,
        id,
      ],
      data: {
        ...initialState.data,
        [id]: {
          id,
          pointId,
        },
      },
    });
  });

  test('COST_CALCULATOR_INSERT_POINT', () => {
    const pointId = '5';
    const state = costCalculatorReducer(initialState, insertDeliveryPoint({
      nextId: secondPoint.id,
      pointId,
    }) as ICostCalculatorActions);
    const id = state.ids[1];

    expect<ICostCalculatorState>(state).toEqual({
      ...initialState,
      ids: [
        firstPoint.id,
        id,
        secondPoint.id,
      ],
      data: {
        ...initialState.data,
        [id]: {
          id,
          pointId,
        },
      },
    });
  });

  test('COST_CALCULATOR_REMOVE_POINT', () => {
    const state = costCalculatorReducer(initialState, removeDeliveryPoint({
      id: firstPoint.id,
    }) as ICostCalculatorActions);

    expect<ICostCalculatorState>(state).toEqual({
      ...initialState,
      ids: [
        secondPoint.id,
      ],
      data: {
        [secondPoint.id]: secondPoint,
      },
    });
  });

  test('COST_CALCULATOR_CHANGE_POINT', () => {
    const pointId = '5';
    const state = costCalculatorReducer(initialState, changeDeliveryPoint({
      id: firstPoint.id,
      pointId,
    }) as ICostCalculatorActions);

    expect<ICostCalculatorState>(state).toEqual({
      ...initialState,
      data: {
        ...initialState.data,
        [firstPoint.id]: {
          ...firstPoint,
          pointId,
        },
      },
    });
  });

  test('COST_CALCULATOR_RESET_ROUTE', () => {
    const state = costCalculatorReducer(initialState, resetDeliveryRoute() as ICostCalculatorActions);

    expect<ICostCalculatorState>(state).toEqual({
      ...initialState,
      ids: [],
      data: {},
    });
  });
});
