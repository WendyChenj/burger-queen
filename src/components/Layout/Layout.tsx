import React from 'react';

import './layout.scss';

type Props = {
  children: React.ReactNode;
};

const Appbar = () => {
  return (
    <div className="app-bar-container">
      <div>logo</div>
      <div>user</div>
      <div>cart</div>
    </div>
  );
};

function Layout({ children }: Props): JSX.Element {
  return (
    <div>
      <Appbar />
      {children}
    </div>
  );
}

export default Layout;
