import React from 'react';
import * as types from '../../../../common/models/types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../common/store/store';
import { chooseBurgerBread } from '../../../../common/store/customBurgerStore/customBurgerActionCreators';
import Ingredient from '../Ingredient/Ingredient';
import IngredientsContainer from './IngredientsContainer/IngredientsContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './selfMadeBurger.scss';

const SelfMadeBurger = (): JSX.Element => {
  const { bread } = useSelector((state: RootState) => ({
    bread: state.customBurger.bread,
  }));

  const dispatch = useDispatch();

  const handleBreadChange = (event: React.MouseEvent, breadName: types.Bread): void => {
    event.preventDefault;

    if (bread !== breadName) {
      dispatch(chooseBurgerBread(breadName));
    }
  };

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
        <Ingredient ingType={bread === 'sandwitch' ? 'sandwitchTop' : 'burgerTop'} />
        <Ingredient ingType={bread === 'sandwitch' ? 'sandwitchBottom' : 'burgerBottom'} />
      </div>

      <div className="self-made-ingredients-container">
        <div className="ingredients-container">
          <h4>1. Choose your bread:</h4>
          <button
            className={bread === 'hamburger' ? 'ing-button-active' : 'ing-button'}
            onClick={(e: React.MouseEvent) => handleBreadChange(e, 'hamburger')}
          >
            Hamburger
          </button>
          <button
            className={bread === 'sandwitch' ? 'ing-button-active' : 'ing-button'}
            onClick={(e: React.MouseEvent) => handleBreadChange(e, 'sandwitch')}
          >
            Sandwitch
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelfMadeBurger;
