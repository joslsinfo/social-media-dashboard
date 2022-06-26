import React, { useState } from "react";

const ButtonNumber4SocialMedia = ({ onClick, onMouseEnter, children }) => {
  const [number, setNumber] = useState(8239);


  // Une fonction pour incrémenter
  const handleNumberOnMouseEnter = () => {
    setNumber(number + 1);
  };
  

    // Une fonction pour décrémenter
    const handleNumberOnMouseLeave = () => {
      setNumber(number - 1);
    };

   

  return (
    <div className="button-group-container">
      {/* {children} */}
      <button
        className="btn-number"
        onMouseEnter={handleNumberOnMouseEnter} 
        onMouseLeave={handleNumberOnMouseLeave}
      >
        {number}
      </button>
      
    </div>
  );
};

export default ButtonNumber4SocialMedia;
