import * as types from '../../models/types';
import * as customBurgerActionTypes from './customBurgerActionTypes';

export const chooseBurgerBread = (newBread: types.Bread): customBurgerActionTypes.ChooseBurgerBread => ({
  type: customBurgerActionTypes.CHOOSE_BURGER_BREAD,
  bread: newBread,
});
