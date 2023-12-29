// Copy this code into Sign in component
import React from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';
import Input from './Input';
const SigninForm = () => {
  const handleClick = (e) => {
    e.preventDefault();
    alert('you just Signed in');
  }
return (
  <form>
    <Input
      inputType="email"
      inputPlaceholder="Enter Email Address"
    />
    <Input
      inputType="password"
      inputPlaceholder="Enter Password"
    />
    <Button
      buttonType="submit"
      buttonText="Sign in"
      handleClick={handleClick}
    />
    <p>
       Dont have an account? <Link to="/signup">Signup</Link>
    </p>
  </form>
 )
};
export default SigninForm;