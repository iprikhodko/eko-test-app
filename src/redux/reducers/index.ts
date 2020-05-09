import { combineReducers } from 'redux';
import costCalculatorReducer from './costCalculator';
import deliveryRoutesReducer from './deliveryRoutes';

const mainReducer = combineReducers({
  deliveryRoutes: deliveryRoutesReducer,
  costCalculator: costCalculatorReducer,
});

export default mainReducer;
