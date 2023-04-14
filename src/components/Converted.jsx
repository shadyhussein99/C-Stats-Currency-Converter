
// Division shown when the user requests currency conversion

import React from "react"

function Converted(props) {
    return <section className="converted-div">
        <p className="converted-p">{props.savedAmount} {props.savedFrom} =</p>
        <h2 className="converted-h2">{props.result} {props.savedTo}</h2>
    </section>
}

export default Converted