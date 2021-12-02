import React from "react";
import fetch from "unfetch";
import useSWR from 'swr'
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const API_URL = "https://open.exchangerate-api.com/v6/latest";

const Converter = () => {
  const { data: currencies, error } = useSWR(API_URL, getData);
  if (error) return <div>failed to load</div>
  if (!currencies) return <div>loading...</div>
  console.log(currencies.rates)
  // return (
  //   <div>
  //     {currencies && currencies.map(currency => (
  //       <div key={currency.id}>{currency.title}</div>
  //     )}
  //   </div>
  // )
  return (
    <div>
      <h3>Enter amount and select currency to convert:</h3>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" focused />
      {/* <Select value={fromCurrency} onChange={handleFromCurrencyChange}>
        <MenuItem value={"EUR"}>EUR</MenuItem>
        {Object.keys(currencies.rates).map((rate, key) => (
          <MenuItem key={key} value={rate}>
            {rate}
          </MenuItem>
        ))}
      </Select> */}
      <TextField id="outlined-basic" label="Outlined" variant="outlined" focused />
      <Button variant="contained" size="large">Convert</Button>
    </div>
  )
};

const getData = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

export default Converter;