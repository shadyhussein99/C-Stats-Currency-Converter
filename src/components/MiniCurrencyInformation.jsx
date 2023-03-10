
// The component used to structure the currency information section in the home page

import React from "react"
import { Link } from "react-router-dom";

function MiniCurrencyInformation(props) {
    return <div className="miniCurrencyInformation-div">
        <h3 className="miniCurrencyInformation-h3"><img src={props.headingImage} alt="currency-img" /> {props.heading}</h3>
        <p className="miniCurrencyInformation-p">{props.paragraph}</p>
        <Link to={props.refrence} className="miniCurrencyInformation-link" >More {props.currencyName} info</Link>
    </div>
}

export default MiniCurrencyInformation