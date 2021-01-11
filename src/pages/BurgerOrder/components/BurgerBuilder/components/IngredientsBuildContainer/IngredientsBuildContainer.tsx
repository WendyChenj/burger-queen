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
      <h4>
        {buildState}. Choose your {title}:
      </h4>
      {ingre.map((ele: EachIngredientType) => (
        <div key={ele.name}>
          <p>{ele.name}</p>
          <button
            onClick={(e: React.MouseEvent) => handleAddButton(e, buildState, ele.name, ele.amount)}
            disabled={ele.amount === 3 ? true : false}
          >
            +
          </button>
          <span>{ele.amount}</span>
          <button
            onClick={(e: React.MouseEvent) => handleRemoveButton(e, buildState, ele.name, ele.amount)}
            disabled={ele.amount === 0 ? true : false}
          >
            -
          </button>
        </div>
      ))}
    </div>
  );
};

export default IngredientsBuildContainer;
