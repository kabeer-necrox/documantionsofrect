// Copy this code into Button component
import React from 'react';
const Button = (props) => {
const {buttonText, buttonType, handleClick} = props;
return (
  <button
    type={buttonType}
    onClick={handleClick}
  >
    {buttonText}
  </button>
 )
};
export default Button;