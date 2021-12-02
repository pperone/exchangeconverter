import React from "react";
import CurrencySelect from "./CurrencySelect";
import { useState } from "react";
import fetch from "unfetch";
import useSWR from "swr";

const API_URL = "https://open.exchangerate-api.com/v6/latest";

const Converter = () => {
  const [toValue, setToValue] = useState(0)
  const [toCurrency, setToCurrency] = useState('USD')
  const [fromValue, setFromValue] = useState(0)

  // Using SWR for handling strict API rate limits
  const { data: data, error } = useSWR(API_URL, fetcher);
  if (error) alert('Error occurred. Try again.');
  if (!data) return <div>...loading</div>;

  const currencies = data;

  const getRate = (currency) => {
    return currencies.rates[currency];
  };

  const currencyKeys = () => {
    return Object.keys(currencies.rates);
  };

  const convertValue = (toCurrency, amount) => {
    return getRate(toCurrency) * amount;
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleFromValueChange = (e) => {
    const value = e.target.value.replace(',', '.')
  
    if (!isNaN(value)) {
        setFromValue(value)
    }
  };

  const handleConversion = () => {
    setToValue(convertValue(toCurrency, fromValue));
  };

  return (
    <div>
      <h3>Enter amount and select currency to convert:</h3>

      <input value={fromValue} onChange={handleFromValueChange}/>
      <CurrencySelect 
        value={toCurrency}
        onChange={handleToCurrencyChange}
        options={currencyKeys()}
      />
      <input type='submit' class='button' value='convert' onClick={handleConversion}></input>

      <h5>Result: {toValue}</h5>
    </div>
  )
};

const fetcher = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

export default Converter;