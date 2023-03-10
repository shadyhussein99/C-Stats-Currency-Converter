
// The component used to structure the form of the currency conversion section and Login & Register page

import React from "react"

function MiniForm(props) {
    return <div className={props.divClass} >
        <label className={props.labelClass}><h5>{props.label}</h5></label>
        <input onChange={props.change} value={props.value} className={props.inputClass} type={props.type} placeholder={props.placeholder} list={props.list} />
        <datalist id="datalistOptions">
            <option value="USD" />
            <option value="EUR" />
            <option value="GBP" />
        </datalist>

    </div>
}

export default MiniForm