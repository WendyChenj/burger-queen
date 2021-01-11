import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addBurgerSauce,
  removeBurgerSauce,
} from '../../../../../../common/store/customBurgerStore/customBurgerActionCreators';
import { Sauce } from '../../../../../../common/models/customBurgerTypes';

type SauceTypes = {
  sauce: Sauce[];
};

const SauceBuildContainer = ({ sauce }: SauceTypes): JSX.Element => {
  const dispatch = useDispatch();

  const handleAddSauce = (e: React.MouseEvent, sauceName: string) => {
    e.preventDefault();
    dispatch(addBurgerSauce(sauceName));
  };

  const handleRemoveSauce = (e: React.MouseEvent, sauceName: string) => {
    e.preventDefault();
    dispatch(removeBurgerSauce(sauceName));
  };

  return (
    <div>
      <h4>5. Choose your sauce:</h4>
      {sauce.map((ele: Sauce) => (
        <div key={ele.name}>
          <button disabled={ele.choose} onClick={(e: React.MouseEvent) => handleAddSauce(e, ele.name)}>
            +
          </button>
          <p>{ele.name}</p>
          <button disabled={!ele.choose} onClick={(e: React.MouseEvent) => handleRemoveSauce(e, ele.name)}>
            -
          </button>
        </div>
      ))}
    </div>
  );
};

export default SauceBuildContainer;
