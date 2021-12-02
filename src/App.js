import React from 'react';
import Converter from './components/Converter'
import './App.css';
import useSWR from 'swr'
import fetch from "unfetch";

const API_URL = "https://open.exchangerate-api.com/v6/latest";

function App() {
  const { data: data, error } = useSWR(API_URL, getData);

  if (error) alert('Error occurred. Try again.');
  if (!data) return <div>...loading</div>;
  const currencies = data;

  return (
    <div className="App">
      <p>
        Currency Converter
      </p>
      <header className="App-header">
        <Converter 
          currencies={currencies}
        />
      </header>
    </div>
  );
}

const getData = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

export default App;
