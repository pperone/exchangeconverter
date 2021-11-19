import React from 'react';
import Converter from './components/Converter'
import './App.css';

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
