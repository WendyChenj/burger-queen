import * as customBurgerTypes from '../../models/customBurgerTypes';
import * as customBurgerActionTypes from './customBurgerActionTypes';

export const chooseBurgerBread = (newBread: customBurgerTypes.Bread): customBurgerActionTypes.ChooseBurgerBread => ({
  type: customBurgerActionTypes.CHOOSE_BURGER_BREAD,
  bread: newBread,
});

export const addBurgerMeat = (meatName: string): customBurgerActionTypes.AddBurgerMeat => ({
  type: customBurgerActionTypes.ADD_BURGER_MEAT,
  meatName: meatName,
});

export const removeBurgerMeat = (meatName: string): customBurgerActionTypes.RemoveBurgerMeat => ({
  type: customBurgerActionTypes.REMOVE_BURGER_MEAT,
  meatName: meatName,
});

export const addBurgerVegetable = (vegName: string): customBurgerActionTypes.AddBurgerVegetable => ({
  type: customBurgerActionTypes.ADD_BURGER_VEGETABLE,
  vegName: vegName,
});

export const removeBurgerVegetable = (vegName: string): customBurgerActionTypes.RemoveBurgerVegetable => ({
  type: customBurgerActionTypes.REMOVE_BURGER_VEGETABLE,
  vegName: vegName,
});

export const addBurgerCheese = (cheeseName: string): customBurgerActionTypes.AddBurgerCheese => ({
  type: customBurgerActionTypes.ADD_BURGER_CHEESE,
  cheeseName: cheeseName,
});

export const removeBurgerCheese = (cheeseName: string): customBurgerActionTypes.RemoveBurgerCheese => ({
  type: customBurgerActionTypes.REMOVE_BURGER_CHEESE,
  cheeseName: cheeseName,
});

export const addBurgerSauce = (sauceName: string): customBurgerActionTypes.AddBurgerSauce => ({
  type: customBurgerActionTypes.ADD_BURGER_SAUCE,
  sauceName: sauceName,
});

export const removeBurgerSauce = (sauceName: string): customBurgerActionTypes.RemoveBurgerSauce => ({
  type: customBurgerActionTypes.REMOVE_BURGER_SAUCE,
  sauceName: sauceName,
});
