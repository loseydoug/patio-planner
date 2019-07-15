import React from 'react';
import logo from './logo.svg';
import './App.css';
import BrickInfo from './containers/BrickInfo'
import GapInfo from './containers/GapInfo'
import PatioInfo from './containers/PatioInfo'

function App() {
  return (
    <div className="App">
      <BrickInfo />
      <BrickInfo />
      <GapInfo />
      <PatioInfo />

      //TODO: access brick sizes here, calculate number of rows, breakdown potential number of each brick per row, render pattern preview
    </div>
  );
}

export default App;
