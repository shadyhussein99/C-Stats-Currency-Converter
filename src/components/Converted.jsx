
// Division shown when the user requests currency conversion

import React from "react"

function Converted(props) {
    return <div className="converted-div">
        <p className="converted-p">{props.savedAmount} {props.savedFrom} =</p>
        <h2 className="converted-h2">{props.result} {props.savedTo}</h2>
    </div>
}

export default Converted