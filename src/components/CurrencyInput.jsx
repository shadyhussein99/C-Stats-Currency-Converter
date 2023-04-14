
// The component used to structure the currency input of the user Form file

import React from "react";

function CurrencyInput(props) {
    return <section className={props.divClass}>

        <label className={props.labelClass}><h5>{props.label}</h5></label>

        <section className="input-group mb-3">

            <select onChange={props.handleChange} className="custom-select form-control" id="inputGroupSelect02">
                <option selected>3-digit currency code...</option>
                <option>USD</option>
                <option>EUR</option>
                <option>EGP</option>
                <option>GBP</option>
                <option>JPY</option>
                <option>AED</option>
                <option>AUD</option>
                <option>KWD</option>
                <option>RUB</option>
                <option>CNY</option>
                <option>BRL</option>
                <option>CAD</option>
                <option>INR</option>
                <option>SAR</option>
                <option>IQD</option>
                <option>QAR</option>
                <option>CZK</option>
                <option>SYP</option>
                <option>YER</option>
                <option>LYD</option>
            </select>
            
        </section>
    </section>
}

export default CurrencyInput