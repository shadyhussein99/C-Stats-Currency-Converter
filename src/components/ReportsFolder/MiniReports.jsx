
// The component used to structure the reports section

import React from "react"

function MiniReports(props) {
    return <div className="miniReports-div">
        <h5 className="miniReports-h5">{props.reportHeading}</h5>
        <ul className="miniReports-ul">
            <li className="miniReports-li">{props.firstList}</li>
            <li className="miniReports-li">{props.secondList}</li>
            <li className="miniReports-li">{props.thirdList}</li>
        </ul>
        <a className="miniReports-a" href={props.link}>Read the full report - {props.date}</a>
    </div>
}

export default MiniReports