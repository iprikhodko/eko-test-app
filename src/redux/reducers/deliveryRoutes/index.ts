import { Reducer } from 'redux';
import ACTIONS from '../../actions';
import { IDeliveryRoutesState } from './types';
import { IDeliveryRoutesActions } from './actions';
import { getRouteId } from './utils';

const initialState: IDeliveryRoutesState = {
  points: {},
  routes: {},
};

const deliveryRoutesReducer: Reducer<IDeliveryRoutesState, IDeliveryRoutesActions> = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_DELIVERY_POINT: {
      const { payload: point } = action;

      return {
        ...state,
        points: {
          ...state.points,
          [point.id]: point,
        },
      };
    }
    case ACTIONS.ADD_DELIVERY_ROUTE: {
      const { payload: routeData } = action;
      const routeId = getRouteId({
        from: routeData.from,
        to: routeData.to,
      });

      return {
        ...state,
        routes: {
          ...state.routes,
          [routeId]: routeData,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default deliveryRoutesReducer;
