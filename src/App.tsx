import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import BurgerOrder from './pages/BurgerOrder/BurgerOrder';
import AuthPage from './pages/Auth/auth-page.comonent';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faCartPlus, faDollarSign } from '@fortawesome/free-solid-svg-icons';

library.add(faUserCircle, faCartPlus, faDollarSign);

function App(): JSX.Element {
  return (
    <Switch>
      <Route path="/auth">
        <AuthPage />
      </Route>
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
