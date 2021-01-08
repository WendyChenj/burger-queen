import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import SelfMadeBurger from '../SelfMadeBurger/SelfMadeBurger';
import ExistingBurger from '../ExistingBurger/ExistingBurger';
import './burgerOrder.scss';

const BurgerOrder = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/order/choose-existing">
          <ExistingBurger />
        </Route>
        <Route path="/order">
          <SelfMadeBurger />
        </Route>
      </Switch>
    </Layout>
  );
};

export default BurgerOrder;
