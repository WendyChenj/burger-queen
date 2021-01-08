import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import BurgerOrder from './components/BurgerOrder/BurgerOrder';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faCartPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faUserCircle, faCartPlus);

function App(): JSX.Element {
  return (
    <Switch>
      <Route path="/order">
        <BurgerOrder />
      </Route>
      <Route path="/">
        <Homepage />
      </Route>
    </Switch>
  );
}

export default App;
