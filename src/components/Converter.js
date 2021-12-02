import React from "react";
import { useState } from "react";
import CurrencySelect from "./CurrencySelect";

const Converter = (props) => {
  const [toCurrency, setToCurrency] = useState('USD')
  const [fromValue, setFromValue] = useState(0)
  const [toValue, setToValue] = useState(0)

  const getRate = (currency) => {
    return props.currencies.rates[currency];
  };

  const currencyKeys = () => {
    return Object.keys(props.currencies.rates);
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
  }

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

export default Converter;