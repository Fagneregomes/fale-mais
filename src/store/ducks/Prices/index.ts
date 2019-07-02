import { Reducer } from 'redux';
import { PriceState, PricesTypes } from './types';


const INITIAL_STATE: PriceState = {
  data: [
    { origin: 11, destiny: 16, value: 1.90 },
    { origin: 16, destiny: 11, value: 2.90 },
    { origin: 11, destiny: 17, value: 1.70 },
    { origin: 17, destiny: 11, value: 2.70 },
    { origin: 11, destiny: 18, value: 0.90 },
    { origin: 18, destiny: 11, value: 1.90 },
],
  error: false,
  loading: false,
};

const reducer: Reducer<PriceState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PricesTypes.LOAD_REQUEST:
      return { ...state, loading: true, error: false };

    case PricesTypes.LOAD_SUCCESS:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };

    case PricesTypes.LOAD_FAILURE:
      return {
      ...state, loading: false, error: true, data: [],
      };

    default:
      return state;
  }
};

export default reducer;
