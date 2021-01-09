import React from 'react';
import './burgerIng.scss';

type Props = {
  ingType: string;
};

const BurgerIngredient = ({ ingType }: Props) => {
  let ingredient = null;

  switch (ingType) {
    case 'burgerTop':
      ingredient = (
        <div className="burgerTop">
          <div className="seeds1"></div>
          <div className="seeds2"></div>
        </div>
      );
      break;
    case 'burgerBottom':
      ingredient = <div className="burgerBottom"></div>;
      break;
    case 'sandwichTop':
      ingredient = (
        <div className="sandwitchTop">
          <div className="seeds1"></div>
          <div className="seeds2"></div>
        </div>
      );
      break;
    case 'sandwitchBottom':
      ingredient = <div className="sandwitchBottom"></div>;
      break;
    case 'beef':
      ingredient = <div className="beef"></div>;
      break;
    case 'chicken':
      ingredient = <div className="chicken"></div>;
      break;
    case 'ham':
      ingredient = <div className="ham"></div>;
      break;
    case 'bacon':
      ingredient = <div className="bacon"></div>;
      break;
    case 'tomato':
      ingredient = <div className="tomato"></div>;
      break;
    case 'lettuce':
      ingredient = <div className="lettuce"></div>;
      break;
    case 'pickel':
      ingredient = <div className="pickle"></div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

export default BurgerIngredient;
