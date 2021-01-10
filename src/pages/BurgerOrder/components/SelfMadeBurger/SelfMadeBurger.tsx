import React from 'react';
import Ingredient from '../Ingredient/Ingredient';
import IngredientsContainer from './IngredientsContainer/IngredientsContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './selfMadeBurger.scss';

const SelfMadeBurger = () => {
  return (
    <div className="self-made-container">
      <div className="burger-container">
        <div className="price-box-container">
          <div className="price-and-icon">
            <FontAwesomeIcon icon="dollar-sign" size="lg" />
            <p>
              <span className="price-colon">:</span>15.22
            </p>
          </div>
        </div>
        <Ingredient ingType="burgerTop" />
        <Ingredient ingType="burgerBottom" />
      </div>

      <div className="self-made-ingredients-container">
        <IngredientsContainer />
      </div>
    </div>
  );
};

export default SelfMadeBurger;
