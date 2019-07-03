import { Reducer } from 'redux';
import { PrefixesState, PrefixesTypes } from './types';

const INITIAL_STATE: PrefixesState = {
  data: [
    { prefix: 11 },
    { prefix: 16 },
    { prefix: 17 },
    { prefix: 18 },
  ],
  error: false,
  loading: false,
};

const reducer: Reducer<PrefixesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PrefixesTypes.LOAD_REQUEST:
      return { ...state, loading: true, error: false };

    case PrefixesTypes.LOAD_SUCCESS:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };

    case PrefixesTypes.LOAD_FAILURE:
      return {
      ...state, loading: false, error: true, data: [],
      };

    default:
      return state;
  }
};

export default reducer;
