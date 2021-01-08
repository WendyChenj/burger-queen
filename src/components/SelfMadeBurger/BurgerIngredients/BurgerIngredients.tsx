import React from 'react';

type Props = {
  ingType: string;
};

const BurgerIngredient = ({ ingType }: Props) => {
  let ingredient = null;

  switch (ingType) {
    case 'burgerTop':
      ingredient = <div className="burgerTop"></div>;
      break;
    case 'burgerBottom':
      ingredient = <div className="burgerBottom"></div>;
      break;
    case 'sandwichTop':
      ingredient = <div className="sandwichTop"></div>;
      break;
    case 'sandwichBottom':
      ingredient = <div className="sandwichBottom"></div>;
      break;
  }
  return;
};

export default BurgerIngredient;
