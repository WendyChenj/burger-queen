import { Action } from 'redux';
import { BurgerState } from '../../models/customBurgerTypes';
import { CustomBurgerActionTypes, CHOOSE_BURGER_BREAD } from './customBurgerActionTypes';

const initialState: BurgerState = {
  bread: 'hamburger',
  vegetable: {
    tomato: 0,
    pickle: 0,
    lettuce: 0,
  },
  meat: {
    beef: 0,
    chicken: 0,
    ham: 0,
    bacon: 0,
  },
  cheese: [
    {
      name: 'white processed cheddar',
      amount: 0,
    },
    {
      name: 'shredded monterey cheddar',
      amount: 0,
    },
  ],
  sauce: [
    {
      name: 'mayo',
      choose: false,
    },
    {
      name: 'mustard',
      choose: false,
    },
  ],
};

const customBurgerReducer = (state: BurgerState = initialState, action: CustomBurgerActionTypes): BurgerState => {
  switch (action.type) {
    case CHOOSE_BURGER_BREAD:
      return {
        ...state,
        bread: action.bread,
      };
    default:
      return state;
  }
};

export default customBurgerReducer;
