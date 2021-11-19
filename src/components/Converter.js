import React from "react";
import fetch from "unfetch";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const API_URL = "https://open.exchangerate-api.com/v6/latest";

const Converter = () => {
  fetcher();
  return (
    <div>
      <h3>Enter amount and select currency to convert:</h3>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" focused />
      <Select value={fromCurrency} onChange={handleFromCurrencyChange}>
        <MenuItem value={"EUR"}>EUR</MenuItem>
        {Object.keys(currencies.rates).map((rate, key) => (
          <MenuItem key={key} value={rate}>
            {rate}
          </MenuItem>
        ))}
      </Select>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" focused />
      <Button variant="contained" size="large">Convert</Button>
    </div>
  )
};

const fetcher = () => {
  fetch(API_URL)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
        },
        (error) => {
          console.log(error)
        }
      )
};

export default Converter;