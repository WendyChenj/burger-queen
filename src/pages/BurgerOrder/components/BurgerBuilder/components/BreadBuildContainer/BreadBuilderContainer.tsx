import React from 'react';
import { useDispatch } from 'react-redux';
import { Bread } from '../../../../../../common/models/customBurgerTypes';
import { chooseBurgerBread } from '../../../../../../common/store/customBurgerStore/customBurgerActionCreators';

type Props = {
  bread: Bread;
};

const BreadBuildContainer = ({ bread }: Props): JSX.Element => {
  const dispatch = useDispatch();

  const handleBreadChange = (event: React.MouseEvent, breadName: Bread): void => {
    event.preventDefault;

    if (bread !== breadName) {
      dispatch(chooseBurgerBread(breadName));
    }
  };

  return (
    <div>
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
  );
};

export default BreadBuildContainer;
