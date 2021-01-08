import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Homepage from './components/Homepage/Homepage';
import BurgerOrder from './components/BurgerOrder/BurgerOrder';

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
