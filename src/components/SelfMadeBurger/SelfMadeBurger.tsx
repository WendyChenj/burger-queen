import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './selfMadeBurger.scss';

const SelfMadeBurger = () => {
  return (
    <div className="self-made-container">
      <div className="burger-container">
        <BurgerIngredient ingType="burgerTop" />
        <BurgerIngredient ingType="burgerBottom" />
      </div>

      <div className="ingredients-container">ingredients</div>
    </div>
  );
};

export default SelfMadeBurger;
