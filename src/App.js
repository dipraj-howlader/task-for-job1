import React from 'react';
import './App.css'
import Currency from './Components/Currency/Currency';
import Header from './Components/Header/Header';
const App = () => {
  return (
    <div>
      <Header></Header>
      <Currency></Currency>
    </div>
  );
};

export default App;