import * as customBurgerTypes from '../../models/customBurgerTypes';

export const CHOOSE_BURGER_BREAD = '[Custom Burger] Choose Burger Bread';

export const ADD_BURGER_MEAT = '[Custom Burger] Add Burger Meat';
export const REMOVE_BURGER_MEAT = '[Custom Burger] Remove Burger Meat';

export const ADD_BURGER_VEGETABLE = '[Custom Burger] Add Burger Vegetable';
export const REMOVE_BURGER_VEGETABLE = '[Custom Burger] Remove Burger Vegetable';

export const ADD_BURGER_CHEESE = '[Custom Burger] Add Burger Cheese';
export const REMOVE_BURGER_CHEESE = '[Custom Burger] Remove Burger Cheese';

export const ADD_BURGER_SAUCE = '[Custom Burger] Add Burger Sauce';
export const REMOVE_BURGER_SAUCE = '[Custom Burger] Remove Burger Sauce';

export interface ChooseBurgerBread {
  type: typeof CHOOSE_BURGER_BREAD;
  bread: customBurgerTypes.Bread;
}

export type CustomBurgerActionTypes = ChooseBurgerBread;
