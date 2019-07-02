import { createStore, Store } from 'redux';
import { PlansState } from './ducks/Plans/types';
import { PriceState } from './ducks/Prices/types';

import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
  plans: PlansState
  prices: PriceState
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
