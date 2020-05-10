import { createAction } from 'redux-actions';
import ACTIONS from '../../actions';
import { IDeliveryPoint } from '../deliveryRoutes/types';
import { ICostCalculatorPoint } from './types';


type IAddPointAction = {
  type: typeof ACTIONS.COST_CALCULATOR_ADD_POINT,
  payload: {
    pointId: IDeliveryPoint['id'],
  },
}
export const addDeliveryPoint = createAction<IAddPointAction['payload']>(ACTIONS.COST_CALCULATOR_ADD_POINT);


type IInsertPointAction = {
  type: typeof ACTIONS.COST_CALCULATOR_INSERT_POINT,
  payload: {
    nextId: ICostCalculatorPoint['id'],
    pointId: ICostCalculatorPoint['pointId'],
  },
}
export const insertDeliveryPoint = createAction<IInsertPointAction['payload']>(ACTIONS.COST_CALCULATOR_INSERT_POINT);


type IRemovePointAction = {
  type: typeof ACTIONS.COST_CALCULATOR_REMOVE_POINT,
  payload: {
    id: ICostCalculatorPoint['id'],
  },
}
export const removeDeliveryPoint = createAction<IRemovePointAction['payload']>(ACTIONS.COST_CALCULATOR_REMOVE_POINT);


type IChangePointAction = {
  type: typeof ACTIONS.COST_CALCULATOR_CHANGE_POINT,
  payload: {
    id: ICostCalculatorPoint['id'],
    pointId: ICostCalculatorPoint['pointId'],
  },
}
export const changeDeliveryPoint = createAction<IChangePointAction['payload']>(ACTIONS.COST_CALCULATOR_CHANGE_POINT);


type IResetRouteAction = {
  type: typeof ACTIONS.COST_CALCULATOR_RESET_ROUTE,
}
export const resetDeliveryRoute = createAction(ACTIONS.COST_CALCULATOR_RESET_ROUTE);


export type ICostCalculatorActions = IAddPointAction | IInsertPointAction | IRemovePointAction | IChangePointAction | IResetRouteAction;
