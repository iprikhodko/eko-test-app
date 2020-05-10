import { Reducer } from 'redux';
import { getUniqId } from '../../../libs/utils';
import ACTIONS from '../../actions';
import { ICostCalculatorActions } from './actions';
import { ICostCalculatorState } from './types';

const initialState: ICostCalculatorState = {
  ids: [],
  data: {},
};

const costCalculatorReducer: Reducer<ICostCalculatorState, ICostCalculatorActions> = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.COST_CALCULATOR_ADD_POINT: {
      const id = getUniqId();
      const { pointId } = action.payload;

      return {
        ...state,
        ids: [...state.ids, id],
        data: {
          ...state.data,
          [id]: {
            id,
            pointId,
          },
        },
      };
    }
    case ACTIONS.COST_CALCULATOR_INSERT_POINT: {
      const { ids } = state;
      const { nextId, pointId } = action.payload;
      const index = ids.indexOf(nextId);

      if (index === -1) {
        return state;
      }

      const id = getUniqId();

      return {
        ...state,
        ids: [
          ...ids.slice(0, index),
          id,
          ...ids.slice(index),
        ],
        data: {
          ...state.data,
          [id]: {
            id,
            pointId: pointId || null,
          },
        },
      };
    }
    case ACTIONS.COST_CALCULATOR_REMOVE_POINT: {
      const { ids, data } = state;
      const { id } = action.payload;
      let newData = data;
      let newIds = ids;

      if (newData[id]) {
        newData = { ...newData };
        delete newData[id];
      }

      const index = newIds.indexOf(id);

      if (index !== -1) {
        newIds = [
          ...newIds.slice(0, index),
          ...newIds.slice(index + 1),
        ]
      }

      return {
        ...state,
        ids: newIds,
        data: newData,
      };
    }
    case ACTIONS.COST_CALCULATOR_CHANGE_POINT: {
      const { data } = state;
      const { id, pointId } = action.payload;

      if (!data[id]) {
        return state;
      }

      return {
        ...state,
        data: {
          ...state.data,
          [id]: {
            ...state.data[id],
            pointId,
          },
        },
      };
    }
    case ACTIONS.COST_CALCULATOR_RESET_ROUTE: {
      return {
        ...state,
        ids: [],
        data: {},
      };
    }
    default: {
      return state;
    }
  }
};

export default costCalculatorReducer;
