import React from "react";
import '../styles.css';

const CurrencySelect = (props) => {
    return (
        <select value={props.value} onChange={props.onChange}>
            {props.options.map(item => {return <option value={item}>{item}</option>})}
        </select>
    )
}

export default CurrencySelect;