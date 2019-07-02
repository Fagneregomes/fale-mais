import { Reducer } from 'redux';
import { PlansState, PlansTypes } from './types';


const INITIAL_STATE: PlansState = {
  data: [{
          dddOrigin: 11,
          dddDestiny: 16,
          time: 20,
          plan: 30,
        },
        {
          dddOrigin: 11,
          dddDestiny: 17,
          time: 80,
          plan: 60,
        },
        {
          dddOrigin: 18,
          dddDestiny: 11,
          time: 200,
          plan: 120,
        },
        {
          dddOrigin: 18,
          dddDestiny: 17,
          time: 100,
          plan: 30,
        },
  ],
  error: false,
  loading: false,
};

const reducer: Reducer<PlansState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlansTypes.LOAD_REQUEST:
      return { ...state, loading: true, error: false };

    case PlansTypes.LOAD_SUCCESS:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };

    case PlansTypes.LOAD_FAILURE:
      return {
      ...state, loading: false, error: true, data: [],
      };

    default:
      return state;
  }
};

export default reducer;
