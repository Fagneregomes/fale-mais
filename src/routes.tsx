import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Plans from './pages/Plans';
import Prices from './pages/Prices';
import Prefixes from './pages/Prefixes';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Plans} />
      <Route path="/price" component={Prices} />
      <Route path="/prefix" component={Prefixes} />
    </Switch>
  );
}

export default Routes;
