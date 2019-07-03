import { combineReducers } from 'redux';

import plans from './Plans';
import prices from './Prices';
import prefixes from './Prefixes';

export default combineReducers({
  plans,
  prices,
  prefixes,
});
