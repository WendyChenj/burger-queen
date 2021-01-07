import React from 'react';

import './homepage.scss';

const Homepage = () => {
  return (
    <div className="container">
      <div className="burgerBackground"></div>
      <div className="main">
        <h1>Welcome to burger queen</h1>
        <h4 className="intro">
          Hey, wanna try to make your own burger? We offer several ingredients for you to make your own styled delicious
          burger. Or if you prefer to choose existing burgers, we do have 15 options for you!
        </h4>

        <h4>Don’t forget to check daily deals! Save your money by applying coupons!</h4>

        <button>Start to order</button>
      </div>
    </div>
  );
};

export default Homepage;
