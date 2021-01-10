import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../../common/components/Layout/Layout';
import SelfMadeBurger from './components/SelfMadeBurger/SelfMadeBurger';
import ExistingBurger from './components/ExistingBurger/ExistingBurger';
import './burgerOrder.scss';

const BurgerOrder = (): JSX.Element => {
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
