// Copy this code into Signup component
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Input from './Input';
const SignupForm = () => {
  const handleClick = (e) => {
    e.preventDefault()
    alert('you just signed up')
  }
return (
  <form>
    <Input
      inputType = "text"
      inputPlaceholder = "Enter Firstname"
    />
    <Input
      inputType = "text"
      inputPlaceholder = "Enter Lastname"
    />
    <Input
      inputType = "email"
      inputPlaceholder = "Enter Email Address"
    />
    <Input
      inputType = "password"
      inputPlaceholder = "Enter Password"
    />
    <Button
      buttonType="submit"
      buttonText = "Sign Up"
      handleClick={handleClick}
    />
    <p>
       Already have an account? <Link to='/signin'>Signin</Link>
    </p>
   </form>
  )
};
export default SignupForm;