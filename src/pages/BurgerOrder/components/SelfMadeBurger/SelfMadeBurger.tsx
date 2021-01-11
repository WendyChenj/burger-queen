import React, { useState } from 'react';
import * as customBurgerTypes from '../../../../common/models/customBurgerTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../common/store/store';
import Ingredient from '../Ingredient/Ingredient';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-ui/core';
import './selfMadeBurger.scss';

const SelfMadeBurger = (): JSX.Element => {
  const { bread, meat, vegetable, cheese, sauce, price } = useSelector((state: RootState) => ({
    bread: state.customBurger.bread,
    meat: state.customBurger.meat,
    vegetable: state.customBurger.vegetable,
    cheese: state.customBurger.cheese,
    sauce: state.customBurger.sauce,
    price: state.customBurger.totalPrice,
  }));

  const [buildState, setBuildState] = useState(1);

  const handleNextButton = (event: React.MouseEvent): void => {
    event.preventDefault();
    if (buildState < 5) {
      setBuildState(buildState + 1);
    }
  };

  const handlePrevButton = (event: React.MouseEvent): void => {
    event.preventDefault();
    if (buildState > 1) {
      setBuildState(buildState - 1);
    }
  };

  const burgerMeat = meat.map((ele: customBurgerTypes.Meat) => {
    return [...Array(ele.amount)].map((_, index) => {
      return <Ingredient ingType={ele.name} key={ele.name + index} />;
    });
  });

  const burgerVegetable = vegetable.map((ele: customBurgerTypes.Vegetable) => {
    return [...Array(ele.amount)].map((_, index) => {
      return <Ingredient ingType={ele.name} key={ele.name + index} />;
    });
  });

  const burgerCheese = cheese.map((ele: customBurgerTypes.Cheese) => {
    return [...Array(ele.amount)].map((_, index) => {
      return <Ingredient ingType={ele.name} key={ele.name + index} />;
    });
  });

  const burgerSauce = sauce.map((ele: customBurgerTypes.Sauce) => {
    if (ele.choose) {
      return <Ingredient ingType={ele.name} />;
    }
  });

  return (
    <div className="self-made-container">
      <div className="burger-container m-t-large m-b-large">
        <div className="price-box-container p-t-small p-b-small p-r-medium p-l-medium">
          <div className="price-and-icon">
            <FontAwesomeIcon icon="dollar-sign" size="lg" />
            <p className="m-a-zero">
              <span className="m-r-xxsmall m-l-xxsmall">:</span>
              {price.toFixed(1)}
            </p>
          </div>
        </div>
        <Ingredient ingType={bread === 'sandwitch' ? 'sandwitchTop' : 'burgerTop'} />
        {burgerSauce}
        {burgerCheese}
        {burgerMeat}
        {burgerVegetable}
        <Ingredient ingType={bread === 'sandwitch' ? 'sandwitchBottom' : 'burgerBottom'} />
      </div>

      <div className="self-made-ingredients-container p-t-medium p-b-medium">
        <div className="ingredients-container p-b-small text-center">
          <BurgerBuilder buildState={buildState} />
          <Button
            onClick={(e: React.MouseEvent) => handlePrevButton(e)}
            disabled={buildState === 1 ? true : false}
            className="m-t-medium m-r-large"
          >
            Previous
          </Button>
          <Button
            onClick={(e: React.MouseEvent) => handleNextButton(e)}
            disabled={buildState === 5 ? true : false}
            className="m-t-medium"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelfMadeBurger;
