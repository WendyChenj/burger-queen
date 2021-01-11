export type Bread = 'hamburger' | 'sandwitch';

export interface Vegetable {
  name: string;
  amount: number;
}

export interface Meat {
  name: string;
  amount: number;
}

export interface Cheese {
  name: string;
  amount: number;
}

export interface Sauce {
  name: string;
  choose: boolean;
}

export type price = number;
export interface BurgerState {
  bread: Bread;
  vegetable: Vegetable[];
  meat: Meat[];
  cheese: Cheese[];
  sauce: Sauce[];
  price: Price;
}
