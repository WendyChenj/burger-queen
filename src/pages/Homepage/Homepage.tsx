import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

import './homepage.scss';

function Homepage(): JSX.Element {
  const history = useHistory();

  const redirectToOrder = (event: React.MouseEvent) => {
    event.preventDefault();
    history.push('/order');
  };

  return (
    <div className="container text-center">
      <div className="burgerBackground"></div>
      <div className="main">
        <h1>Welcome to Burger Queen</h1>
        <h4 className="intro m-a-large">
          Hey, wanna try to make your own burger? We offer several ingredients for you to make your own styled delicious
          burger. Or if you prefer to choose existing burgers, we do have 15 options for you!
        </h4>

        <h4 className="intro-2">Don’t forget to check daily deals! Save your money by applying coupons!</h4>

        <Button onClick={(event: React.MouseEvent) => redirectToOrder(event)} variant="contained" color="primary">
          Start to order
        </Button>
        {/* <button></button> */}
      </div>
    </div>
  );
}

export default Homepage;
