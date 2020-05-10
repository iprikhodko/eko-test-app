import mockData from '../../../mock.json';
import { addDeliveryPoint, addDeliveryRoute, IDeliveryRoutesActions } from './actions';
import deliveryRoutesReducer from './index';
import { IDeliveryRoute } from './types';

// here is data which were provided in task description and converted to reducer state format

export const testData = mockData as IDeliveryRoute[];

// @ts-ignore
let testInitialState = deliveryRoutesReducer(undefined, { type: '' });

testData.forEach((route) => {
  const { from, to } = route;
  const { points } = testInitialState;

  if (!points[from]) {
    testInitialState = deliveryRoutesReducer(testInitialState, addDeliveryPoint({
      id: from,
      name: from,
    }) as IDeliveryRoutesActions);
  }

  if (!points[to]) {
    testInitialState = deliveryRoutesReducer(testInitialState, addDeliveryPoint({
      id: to,
      name: to,
    }) as IDeliveryRoutesActions);
  }

  testInitialState = deliveryRoutesReducer(testInitialState, addDeliveryRoute(route) as IDeliveryRoutesActions);
});

export default testInitialState;
