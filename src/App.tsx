import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import BurgerOrder from './pages/BurgerOrder/BurgerOrder';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faCartPlus, faDollarSign } from '@fortawesome/free-solid-svg-icons';

library.add(faUserCircle, faCartPlus, faDollarSign);

function App(): JSX.Element {
  return (
    <div className="app-container">
      <Switch>
        <Route path="/order">
          <BurgerOrder />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
