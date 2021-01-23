import React from 'react';
import { useDispatch } from 'react-redux';
import { Bread } from '../../../../../../common/models/customBurgerTypes';
import { chooseBurgerBread } from '../../../../../../common/store/customBurgerStore/customBurgerActionCreators';
import { Button } from '@material-ui/core';

type Props = {
  bread: Bread;
};

const BreadBuildStep = ({ bread }: Props): JSX.Element => {
  const dispatch = useDispatch();

  const handleBreadChange = (breadName: Bread): void => {
    if (bread !== breadName) {
      dispatch(chooseBurgerBread(breadName));
    }
  };

  return (
    <div>
      <h4 className="font-size-20px">1. Choose your bread:</h4>
      <Button
        variant="contained"
        size="large"
        className={bread === 'hamburger' ? 'button-active m-r-medium' : 'button-nonactive m-r-medium'}
        onClick={() => handleBreadChange('hamburger')}
      >
        Hamburger
      </Button>
      <Button
        variant="contained"
        size="large"
        className={bread === 'sandwitch' ? 'button-active' : 'button-nonactive'}
        onClick={() => handleBreadChange('sandwitch')}
      >
        Sandwitch
      </Button>
    </div>
  );
};

export default BreadBuildStep;
