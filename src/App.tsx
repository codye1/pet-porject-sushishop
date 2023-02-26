import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routing from './components/routing';
import Navbar from './UI/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
         <Routing/>
      </BrowserRouter>
  );
}

export default App;
