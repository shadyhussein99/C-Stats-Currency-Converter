
// Title of the website

import React from "react"

function Title() {

    var day = new Date().getDate()
    var month = (new Date().getMonth()) + 1
    var year = new Date().getFullYear()

    return <div className="title-div">
        <div className="row">
            <div className="col-lg-6 col-sm-12 title-first-col">
                <h1 className="title-h1">C-STATS Currency Converter</h1>
                <p className="title-p">Check currency exchange rates</p>
                <h2 className="title-h2">Live stats according to</h2>
                <h3 className="title-h3">{day} : {month} : {year}</h3>
            </div>
            <div className="col-lg-6 col-sm-12 title-second-col">
                <img className="title-img" src={"./public/pics/currencyExchange.PNG"} alt="currency-pic" />
            </div>
        </div>
    </div>
}

export default Title
