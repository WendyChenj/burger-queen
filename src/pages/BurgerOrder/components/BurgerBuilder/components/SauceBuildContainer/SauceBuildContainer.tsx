import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addBurgerSauce,
  removeBurgerSauce,
} from '../../../../../../common/store/customBurgerStore/customBurgerActionCreators';
import { Sauce } from '../../../../../../common/models/customBurgerTypes';
import { Box, Button } from '@material-ui/core';
import './sauceBuildContainer.scss';

type SauceTypes = {
  sauce: Sauce[];
};

const SauceBuildContainer = ({ sauce }: SauceTypes): JSX.Element => {
  const dispatch = useDispatch();

  const handleAddSauce = (e: React.MouseEvent, sauceName: string) => {
    e.preventDefault();
    dispatch(addBurgerSauce(sauceName));
  };

  const handleRemoveSauce = (e: React.MouseEvent, sauceName: string) => {
    e.preventDefault();
    dispatch(removeBurgerSauce(sauceName));
  };

  return (
    <div>
      <h4 className="font-small-medium">5. Choose your sauce:</h4>
      <div className="sauce-button-container">
        {sauce.map((ele: Sauce) => (
          <div key={ele.name}>
            <Button
              className={ele.choose ? 'button-disabled' : 'button-nonactive'}
              onClick={(e: React.MouseEvent) => handleAddSauce(e, ele.name)}
            >
              +
            </Button>
            <Box className="ingre-name m-b-xxsmall m-t-xxsmall">{ele.name}</Box>
            <Button
              className={!ele.choose ? 'button-disabled' : 'button-nonactive'}
              onClick={(e: React.MouseEvent) => handleRemoveSauce(e, ele.name)}
            >
              -
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SauceBuildContainer;
