
// Form of the currency conversion section  ( user's input )

import React from "react"
import { useState } from "react"
import MiniForm from "./MiniForm"

function Form(props) {

    var [amount, setAmount] = useState("")    // value of user amount input before clicking convert
    var [from, setFrom] = useState("")     // value of user change from input before clicking convert
    var [to, setTo] = useState("")     // value of user change to input before clicking convert

    function changeAmount(event) {
        setAmount(event.target.value)
    }

    function changeFrom(event) {
        setFrom(event.target.value)
    }

    function changeTo(event) {
        setTo(event.target.value)
    }

    function handleClick() {

        if (isNaN(amount) === true) {
            props.setValidNo(true)
            props.setShown(false)
        } else {
            props.setValidNo(false)
            props.setShown(true)
        }
        props.setSavedAmount(amount)
        props.setSavedFrom(from.toUpperCase())   // toUpperCase() because the API can read the 3-digit code of the currency in upper case only
        props.setSavedTo(to.toUpperCase())

    }

    return <div className="form-div">
        <div className="row">
            <div className="col col-lg-3 col-sm-3">
                <MiniForm
                    type="text"
                    label="Amount"
                    placeholder=""
                    list=""
                    change={changeAmount}
                    value={amount}
                    divClass="miniform-in-form"
                    labelClass="labelClass-in-form"
                    inputClass="form-control"
                />
                {props.validNo && <p className="invalid-paragraph">please enter a valid number</p>}</div>
            <div className="col col-lg-3 col-sm-3">
                <MiniForm
                    type="text"
                    label="From"
                    placeholder="3-digit currency code"
                    list="datalistOptions"
                    change={changeFrom}
                    value={from}
                    divClass="miniform-in-form"
                    labelClass="labelClass-in-form"
                    inputClass="form-control"
                />
            </div>
            <div className="col col-lg-1 col-sm-1 form-third-col"><i className="fa-solid fa-arrow-right"></i></div>
            <div className="col col-lg-3 col-sm-3">
                <MiniForm
                    type="text"
                    label="To"
                    placeholder="3-digit currency code"
                    list="datalistOptions"
                    change={changeTo}
                    value={to}
                    divClass="miniform-in-form"
                    labelClass="labelClass-in-form"
                    inputClass="form-control"
                />
                <button onClick={handleClick} className="btn btn-outline-primary form-button">Convert</button></div>
        </div>


    </div>
}

export default Form