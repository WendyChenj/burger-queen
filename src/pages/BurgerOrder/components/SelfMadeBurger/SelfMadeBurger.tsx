import React from 'react';
import Ingredient from '../Ingredient/Ingredient';
import './selfMadeBurger.scss';

const SelfMadeBurger = () => {
  return (
    <div className="self-made-container">
      <div className="burger-container">
        <Ingredient ingType="burgerTop" />
        <Ingredient ingType="burgerBottom" />
      </div>

      <div className="ingredients-container">ingredients</div>
    </div>
  );
};

export default SelfMadeBurger;
