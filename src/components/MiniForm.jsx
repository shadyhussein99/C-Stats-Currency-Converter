
// The component used to structure the Login & Register page and the amount input in the Form file

import React from "react"

function MiniForm(props) {
    return <section className={props.divClass} >

        <label className={props.labelClass}><h5>{props.label}</h5></label>
        <input onChange={props.change} value={props.value} className={props.inputClass} type={props.type} placeholder={props.placeholder} />

    </section>
}

export default MiniForm
