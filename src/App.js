import React from 'react';
import Converter from './components/Converter'
import './App.css';

const API_URL = "https://open.exchangerate-api.com/v6/latest";

function App() {
  return (
    <div className="App">
      <p>
        Currency Converter
      </p>
      <header className="App-header">
        <Converter />
      </header>
    </div>
  );
}

export default App;
