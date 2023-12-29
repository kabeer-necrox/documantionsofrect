import React from 'react';
const Input = (props) => {
const { inputType, inputPlaceholder } = props;
return (
  <input
    type = {inputType}
    placeholder = {inputPlaceholder}
  />
 )
};
export default Input;