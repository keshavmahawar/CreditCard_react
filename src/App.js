import React from 'react';
import './App.css';
import CardPage from './components/cardDetails/CardPage'
import PinPage from './components/PinInput/PinPage'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div>
        <Navbar />
        <CardPage />
        <PinPage />
    </div>
  );
}

export default App;
