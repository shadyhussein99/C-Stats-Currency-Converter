
// Component of the currency information

import React from "react"
import Navbar from "../Navbar"
import Footer from "../Footer"

function Currency(props) {
    return <div>
        <Navbar />
        <div className="container currency-div">
            <h1 className="currency-first-h1">{props.currencyHeading}</h1>
            <h1 className={props.class}><img src={props.headingImage} alt="currency-img" /> {props.currencyCode}</h1>
            <h3 className="currency-h3">Description</h3>
            <p>{props.description}</p>
            <h3 className="currency-h3">Economy</h3>
            <ul>
                <li className="currency-li">{props.firstEconomy}</li>
                <li className="currency-li">{props.secondEconomy}</li>
                <li className="currency-li">{props.thirdtEconomy}</li>
                <li className="currency-li">{props.fourthEconomy}</li>
            </ul>
            <h3 className="currency-h3">History</h3>
            <ul>
                <li className="currency-li">{props.firstHistory}</li>
                <li className="currency-li">{props.secondHistory}</li>
                <li className="currency-li">{props.thirdHistory}</li>
                <li className="currency-li">{props.fourthHistory}</li>
            </ul>
        </div>
        <Footer />
    </div>
}

export default Currency