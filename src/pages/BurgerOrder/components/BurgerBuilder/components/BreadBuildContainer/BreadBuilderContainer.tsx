import React from 'react';
import { useDispatch } from 'react-redux';
import { Bread } from '../../../../../../common/models/customBurgerTypes';
import { chooseBurgerBread } from '../../../../../../common/store/customBurgerStore/customBurgerActionCreators';
import { Button } from '@material-ui/core';

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
      <h4 className="font-small-medium">1. Choose your bread:</h4>
      <Button
        variant="contained"
        size="large"
        className={bread === 'hamburger' ? 'button-active m-r-medium' : 'button-nonactive m-r-medium'}
        onClick={(e: React.MouseEvent) => handleBreadChange(e, 'hamburger')}
      >
        Hamburger
      </Button>
      <Button
        variant="contained"
        size="large"
        className={bread === 'sandwitch' ? 'button-active' : 'button-nonactive'}
        onClick={(e: React.MouseEvent) => handleBreadChange(e, 'sandwitch')}
      >
        Sandwitch
      </Button>
    </div>
  );
};

export default BreadBuildContainer;
