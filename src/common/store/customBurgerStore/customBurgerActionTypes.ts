import * as types from '../../models/types';

export const CHOOSE_BURGER_BREAD = 'CHOOSE_BURGER_BREAD';

export const ADD_BURGER_MEAT = 'ADD_BURGER_MEAT';
export const REMOVE_BURGER_MEAT = 'REMOVE_BURGER_MEAT';

export const ADD_BURGER_VEGETABLE = 'ADD_BURGER_VEGETABLE';
export const REMOVE_BURGER_VEGETABLE = 'REMOVE_BURGER_VEGETABLE';

export const ADD_BURGER_CHEESE = 'ADD_BURGER_CHEESE';
export const REMOVE_BURGER_CHEESE = 'REMOVE_BURGER_CHEESE';

export const ADD_BURGER_SAUCE = 'ADD_BURGER_SAUCE';
export const REMOVE_BURGER_SAUCE = 'REMOVE_BURGER_SAUCE';

export interface ChooseBurgerBread {
  type: typeof CHOOSE_BURGER_BREAD;
  bread: types.Bread;
}

export type CustomBurgerActionTypes = ChooseBurgerBread;
