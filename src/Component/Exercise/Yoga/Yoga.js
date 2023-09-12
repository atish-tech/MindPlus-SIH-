import React, { useState } from 'react';
import './YogaStyle.css';

const Yoga = ({ name, imageUrl,description }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="yoga-exercise">

      <div className="img-name">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      </div>
      
      
      { <div className="description">
        <h2>Benefits</h2>
        <h5>{description}</h5>
       
      </div> }
     
    </div>
  );
};

export default Yoga;
