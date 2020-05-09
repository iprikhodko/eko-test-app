import { createStore } from 'redux';
import mainReducer from './reducers';
import testInitialState from './reducers/deliveryRoutes/exampleData';

const store = createStore(mainReducer, {
  deliveryRoutes: testInitialState,
});

export type IState = ReturnType<typeof mainReducer>;

export default store;
