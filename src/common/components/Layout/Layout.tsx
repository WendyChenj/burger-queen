import React from 'react';
import { NavLink } from 'react-router-dom';

import './layout.scss';
import burgerLogo from '../../../assets/burger-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  children: React.ReactNode;
};

const Appbar = () => {
  console.log(burgerLogo);
  return (
    <div className="app-bar-container">
      <div className="app-bar-logo-container">
        <img src={burgerLogo} alt="burger logo" className="burgerLogo" />
        <h1>BURGER QUEEN</h1>
      </div>

      <div className="app-bar-account-container">
        <div>
          <FontAwesomeIcon icon="user-circle" size="lg" />
          <span className="signin-text">Sign In</span>
        </div>
        <div>
          <FontAwesomeIcon icon="cart-plus" size="lg" />
        </div>
      </div>
    </div>
  );
};

function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <Appbar />
      <div className="navigation-bar-container">
        <ul className="navigation-bar">
          <li>
            <NavLink exact to="/order" activeClassName="active-link-item">
              Make Your Own Burger
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/choose-existing" activeClassName="active-link-item">
              Choose Existing Burgers
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/burger-reviews" activeClassName="active-link-item">
              Check Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      {children}
    </>
  );
}

export default Layout;
