export type Bread = 'hamburger' | 'sandwitch';

export type Price = number;

export interface Vegetable {
  name: string;
  amount: number;
  price: Price;
}

export interface Meat {
  name: string;
  amount: number;
  price: Price;
}

export interface Cheese {
  name: string;
  amount: number;
  price: Price;
}

export interface Sauce {
  name: string;
  choose: boolean;
}

export interface BurgerState {
  bread: Bread;
  vegetable: Vegetable[];
  meat: Meat[];
  cheese: Cheese[];
  sauce: Sauce[];
  totalPrice: Price;
}
