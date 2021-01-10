import React, { useState } from 'react';
import './ingsContainer.scss';

const IngredientsContainer = () => {
  const [ing, setIng] = useState('hamburger');

  return (
    <div className="ingredients-container">
      <h4>1. Choose your bread:</h4>
      <button className="ing-button">Hamburger</button>
      <button className="ing-button">Sandwitch</button>
    </div>
  );
};

export default IngredientsContainer;
