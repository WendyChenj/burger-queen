import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../common/store/store';

import BreadBuildContainer from './components/BreadBuildContainer/BreadBuilderContainer';
import IngredientsBuildContainer from './components/IngredientsBuildContainer/IngredientsBuildContainer';
import SauceBuildContainer from './components/SauceBuildContainer/SauceBuildContainer';

type Props = {
  buildState: number;
};

const BurgerBuilder = ({ buildState }: Props): JSX.Element => {
  const { bread, meat, vegetable, cheese, sauce } = useSelector((state: RootState) => ({
    bread: state.customBurger.bread,
    meat: state.customBurger.meat,
    vegetable: state.customBurger.vegetable,
    cheese: state.customBurger.cheese,
    sauce: state.customBurger.sauce,
  }));

  let burgerBuilder: JSX.Element = null;

  switch (buildState) {
    case 1:
      burgerBuilder = <BreadBuildContainer bread={bread} />;
      break;
    case 2:
      burgerBuilder = <IngredientsBuildContainer buildState={buildState} title="meat" ingre={meat} />;
      break;
    case 3:
      burgerBuilder = <IngredientsBuildContainer buildState={buildState} title="vegetable" ingre={vegetable} />;
      break;
    case 4:
      burgerBuilder = <IngredientsBuildContainer buildState={buildState} title="cheese" ingre={cheese} />;
      break;
    case 5:
      burgerBuilder = <SauceBuildContainer sauce={sauce} />;
      break;
    default:
      burgerBuilder = null;
  }
  return burgerBuilder;
};

export default BurgerBuilder;
