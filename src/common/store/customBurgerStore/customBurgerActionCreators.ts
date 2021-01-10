import * as customBurgerTypes from '../../models/customBurgerTypes';
import * as customBurgerActionTypes from './customBurgerActionTypes';

export const chooseBurgerBread = (newBread: customBurgerTypes.Bread): customBurgerActionTypes.ChooseBurgerBread => ({
  type: customBurgerActionTypes.CHOOSE_BURGER_BREAD,
  bread: newBread,
});
