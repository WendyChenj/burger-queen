export type Bread = 'hamburger' | 'sandwitch';

export interface Vegetable {
  tomato: number;
  pickle: number;
  lettuce: number;
}

export interface Meat {
  beef: number;
  chicken: number;
  bacon: number;
  ham: number;
}

export interface Cheese {
  name: string;
  amount: number;
}

export interface Sauce {
  name: string;
  choose: boolean;
}

export interface BurgerState {
  bread: Bread;
  vegetable: Vegetable;
  meat: Meat;
  cheese: Cheese[];
  sauce: Sauce[];
}
