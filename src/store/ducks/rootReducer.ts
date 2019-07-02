import { combineReducers } from 'redux';

import plans from './Plans';
import prices from './Prices';

export default combineReducers({
  plans,
  prices,
});
