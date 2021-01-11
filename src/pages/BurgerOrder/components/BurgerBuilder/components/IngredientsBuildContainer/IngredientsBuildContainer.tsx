import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addBurgerMeat,
  addBurgerVegetable,
  addBurgerCheese,
  removeBurgerMeat,
  removeBurgerVegetable,
  removeBurgerCheese,
} from '../../../../../../common/store/customBurgerStore/customBurgerActionCreators';
import { Meat, Vegetable, Cheese } from '../../../../../../common/models/customBurgerTypes';
import { Box, Button } from '@material-ui/core';
import './ingresBuildContainer.scss';

type Ingredient = Meat[] | Vegetable[] | Cheese[];

type EachIngredientType = Meat | Vegetable | Cheese;

type IngredientsTypes = {
  buildState: number;
  title: string;
  ingre: Ingredient;
};

const IngredientsBuildContainer = ({ buildState, title, ingre }: IngredientsTypes): JSX.Element => {
  const dispatch = useDispatch();

  const handleAddButton = (event: React.MouseEvent, buildState: number, ingName: string, ingAmount: number): void => {
    event.preventDefault();
    if (ingAmount < 3) {
      switch (buildState) {
        case 2:
          dispatch(addBurgerMeat(ingName));
          break;
        case 3:
          dispatch(addBurgerVegetable(ingName));
          break;
        case 4:
          dispatch(addBurgerCheese(ingName));
          break;
        default:
          break;
      }
    }
  };

  const handleRemoveButton = (
    event: React.MouseEvent,
    buildState: number,
    ingName: string,
    ingAmount: number,
  ): void => {
    event.preventDefault();
    if (ingAmount >= 1) {
      switch (buildState) {
        case 2:
          dispatch(removeBurgerMeat(ingName));
          break;
        case 3:
          dispatch(removeBurgerVegetable(ingName));
          break;
        case 4:
          dispatch(removeBurgerCheese(ingName));
          break;
        default:
          break;
      }
    }
  };
  return (
    <div>
      <h4 className="font-small-medium">
        {buildState}. Choose your {title}:
      </h4>
      <div className="ingres-button-container">
        {ingre.map((ele: EachIngredientType) => (
          <div key={ele.name}>
            <Box className="ingre-name m-b-small">
              {ele.name} (${ele.price})
            </Box>
            <Button
              className={
                ele.amount === 3
                  ? 'button-disabled font-weight-bold p-a-zero p-t-xxxsmall p-b-xxxsmall m-r-xxxsmall'
                  : 'button-nonactive font-weight-bold p-a-zero p-t-xxxsmall p-b-xxxsmall m-r-xxxsmall'
              }
              onClick={(e: React.MouseEvent) => handleAddButton(e, buildState, ele.name, ele.amount)}
              disabled={ele.amount === 3 ? true : false}
            >
              +
            </Button>
            <span>{ele.amount}</span>
            <Button
              className={
                ele.amount === 0
                  ? 'button-disabled font-weight-bold p-a-zero p-t-xxxsmall p-b-xxxsmall m-l-xxxsmall'
                  : 'button-nonactive font-weight-bold p-a-zero p-t-xxxsmall p-b-xxxsmall m-l-xxxsmall'
              }
              onClick={(e: React.MouseEvent) => handleRemoveButton(e, buildState, ele.name, ele.amount)}
              disabled={ele.amount === 0 ? true : false}
            >
              -
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientsBuildContainer;
