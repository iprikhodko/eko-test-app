import { addDeliveryPoint, addDeliveryRoute, IDeliveryRoutesActions } from './actions';
import deliveryRoutesReducer from './index';
import { IDeliveryRoute } from './types';

// here is data which were provided in task description and converted to reducer state format

const data: IDeliveryRoute[] = [{
  from: 'A',
  to: 'B',
  weight: 1,
}, {
  from: 'A',
  to: 'C',
  weight: 4,
}, {
  from: 'A',
  to: 'D',
  weight: 10,
}, {
  from: 'B',
  to: 'E',
  weight: 3,
}, {
  from: 'C',
  to: 'D',
  weight: 4,
}, {
  from: 'C',
  to: 'F',
  weight: 2,
}, {
  from: 'D',
  to: 'E',
  weight: 1,
}, {
  from: 'E',
  to: 'B',
  weight: 3,
}, {
  from: 'E',
  to: 'A',
  weight: 2,
}, {
  from: 'F',
  to: 'D',
  weight: 1,
}];

// @ts-ignore
let testInitialState = deliveryRoutesReducer(undefined, { type: '' });

data.forEach((route) => {
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
