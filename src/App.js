import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Update the import statement

import Navbar from './components/Navbar';
import SigninForm from './components/Signin';
import SignupForm from './components/Signup';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/signin' element={<SigninForm />} />
        <Route path='/signup' element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
