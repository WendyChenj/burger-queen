import { Meat, Vegetable, BurgerState, Cheese, Sauce } from '../../models/customBurgerTypes';
import {
  CustomBurgerActionTypes,
  CHOOSE_BURGER_BREAD,
  ADD_BURGER_MEAT,
  REMOVE_BURGER_MEAT,
  ADD_BURGER_VEGETABLE,
  REMOVE_BURGER_VEGETABLE,
  ADD_BURGER_CHEESE,
  REMOVE_BURGER_CHEESE,
  ADD_BURGER_SAUCE,
  REMOVE_BURGER_SAUCE,
} from './customBurgerActionTypes';

const initialState: BurgerState = {
  bread: 'hamburger',
  vegetable: [
    {
      name: 'tomato',
      amount: 0,
      price: 0.5,
    },
    {
      name: 'lettuce',
      amount: 0,
      price: 0.5,
    },
    {
      name: 'pickle',
      amount: 0,
      price: 0.5,
    },
  ],
  meat: [
    {
      name: 'beef',
      amount: 0,
      price: 1.8,
    },
    {
      name: 'chicken',
      amount: 0,
      price: 1.5,
    },
    {
      name: 'ham',
      amount: 0,
      price: 1.2,
    },
    {
      name: 'bacon',
      amount: 0,
      price: 1.2,
    },
  ],
  cheese: [
    {
      name: 'white processed cheddar',
      amount: 0,
      price: 0.3,
    },
    {
      name: 'shredded monterey cheddar',
      amount: 0,
      price: 0.3,
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
  totalPrice: 2.0,
};

const customBurgerReducer = (state: BurgerState = initialState, action: CustomBurgerActionTypes): BurgerState => {
  
  switch (action.type) {
    case CHOOSE_BURGER_BREAD:
      return {
        ...state,
        bread: action.bread,
      };
    case ADD_BURGER_MEAT:
      let addedMeatPrice = 0;
      const addedMeat = state.meat.map((ele: Meat) => {
        if (ele.name === action.meatName) {
          addedMeatPrice = ele.price;
          return {
            ...ele,
            amount: (ele.amount += 1),
          };
        } else {
          return ele;
        }
      });
      return {
        ...state,
        meat: addedMeat,
        totalPrice: state.totalPrice + addedMeatPrice,
      };
    case REMOVE_BURGER_MEAT:
      let deductedMeatPrice = 0;
      const removedMeat = state.meat.map((ele: Meat) => {
        if (ele.name === action.meatName) {
          deductedMeatPrice = ele.price;
          return {
            ...ele,
            amount: (ele.amount -= 1),
          };
        } else {
          return ele;
        }
      });
      return {
        ...state,
        meat: removedMeat,
        totalPrice: state.totalPrice - deductedMeatPrice,
      };
    case ADD_BURGER_VEGETABLE:
      let addedVegetablePrice = 0;
      const addedVeg = state.vegetable.map((ele: Vegetable) => {
        if (ele.name === action.vegName) {
          addedVegetablePrice = ele.price;
          return {
            ...ele,
            amount: (ele.amount += 1),
          };
        } else {
          return ele;
        }
      });
      return {
        ...state,
        vegetable: addedVeg,
        totalPrice: state.totalPrice + addedVegetablePrice,
      };
    case REMOVE_BURGER_VEGETABLE:
      let deductedVegetablePrice = 0;
      const removedVeg = state.vegetable.map((ele: Vegetable) => {
        if (ele.name === action.vegName) {
          deductedVegetablePrice = ele.price;
          return {
            ...ele,
            amount: (ele.amount -= 1),
          };
        } else {
          return ele;
        }
      });
      return {
        ...state,
        vegetable: removedVeg,
        totalPrice: state.totalPrice - deductedVegetablePrice,
      };
    case ADD_BURGER_CHEESE:
      let addedCheesePrice = 0;
      const addedCheese = state.cheese.map((ele: Cheese) => {
        if (ele.name === action.cheeseName) {
          addedCheesePrice = ele.price;
          return {
            ...ele,
            amount: (ele.amount += 1),
          };
        } else {
          return ele;
        }
      });
      return {
        ...state,
        cheese: addedCheese,
        totalPrice: state.totalPrice + addedCheesePrice,
      };
    case REMOVE_BURGER_CHEESE:
      let deductedCheesePrice = 0;
      const removedCheese = state.cheese.map((ele: Cheese) => {
        if (ele.name === action.cheeseName) {
          deductedCheesePrice = ele.price;
          return {
            ...ele,
            amount: (ele.amount -= 1),
          };
        } else {
          return ele;
        }
      });
      return {
        ...state,
        cheese: removedCheese,
        totalPrice: state.totalPrice - deductedCheesePrice ,
      };
    case ADD_BURGER_SAUCE:
      const addedSauce = state.sauce.map((ele: Sauce) => {
        if (ele.name === action.sauceName) {
          return {
            ...ele,
            choose: true,
          };
        } else {
          return ele;
        }
      });
      return {
        ...state,
        sauce: addedSauce,
      };
    case REMOVE_BURGER_SAUCE:
      const removedSauce = state.sauce.map((ele: Sauce) => {
        if (ele.name === action.sauceName) {
          return {
            ...ele,
            choose: false,
          };
        } else {
          return ele;
        }
      });
      return {
        ...state,
        sauce: removedSauce,
      };
    default:
      return state;
  }
};

export default customBurgerReducer;
