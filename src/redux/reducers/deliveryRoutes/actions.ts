import { createAction } from 'redux-actions';
import ACTIONS from '../../actions';
import { IDeliveryPoint, IDeliveryRoute } from './types';


type IAddDeliveryPointAction = {
  type: typeof ACTIONS.ADD_DELIVERY_POINT;
  payload: IDeliveryPoint,
};
export const addDeliveryPoint = createAction<IAddDeliveryPointAction['payload']>(ACTIONS.ADD_DELIVERY_POINT);


type IAddDeliveryRouteAction = {
  type: typeof ACTIONS.ADD_DELIVERY_ROUTE,
  payload: IDeliveryRoute;
};
export const addDeliveryRoute = createAction<IAddDeliveryRouteAction['payload']>(ACTIONS.ADD_DELIVERY_ROUTE);


export type IDeliveryRoutesActions = IAddDeliveryPointAction | IAddDeliveryRouteAction;
