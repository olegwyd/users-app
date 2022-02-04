import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} exact />
        <Route path="/signIn" element={<SignIn />} exact />
      </Routes>
    </div>
  );
};

export default App;
