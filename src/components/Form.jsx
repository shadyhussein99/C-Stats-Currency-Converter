
// Form of the currency conversion section  ( user's input )

import React from "react"
import { useState, useEffect } from "react"
import MiniForm from "./MiniForm"
import CurrencyInput from "./CurrencyInput"

function Form(props) {

    var [amount, setAmount] = useState("")    // value of user amount input before clicking convert
    var [from, setFrom] = useState("")     // value of user change from input before clicking convert
    var [to, setTo] = useState("")     // value of user change to input before clicking convert

    
    useEffect(function () {
        fetch(`https://api.currencybeacon.com/v1/convert?api_key=280d6550ce1839946307c723fbec08a2&from=${props.savedFrom}&to=${props.savedTo}&amount=${props.savedAmount}`)
            .then(res => res.json())
            .then(res => {
                const { response } = res
                props.setResult(response)
            })
            .catch(err => console.log(err))
    }, [props.savedAmount, props.savedFrom, props.savedTo])


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
        props.setSavedFrom(from)
        props.setSavedTo(to)

    }

    return <section className="form-div">
        <section className="row">

            <section className="col col-lg-3 col-sm-3">
                <MiniForm
                    type="text"
                    label="Amount"
                    placeholder=""
                    change={changeAmount}
                    value={amount}
                    divClass="miniform-in-form"
                    labelClass="labelClass-in-form"
                    inputClass="form-control"
                />
                {props.validNo && <p className="invalid-paragraph">please enter a valid number</p>}
            </section>

            <section className="col col-lg-3 col-sm-3">
                <CurrencyInput
                    label="From"
                    handleChange={changeFrom}
                    labelClass="labelClass-in-form"
                    divClass="miniform-in-form"
                />
            </section>

            <section className="col col-lg-1 col-sm-1 form-third-col">
                <i className="fa-solid fa-arrow-right"></i>
            </section>

            <section className="col col-lg-3 col-sm-3">
                <CurrencyInput
                    label="To"
                    handleChange={changeTo}
                    labelClass="labelClass-in-form"
                    divClass="miniform-in-form"
                />
                <button onClick={handleClick} className="btn btn-outline-primary form-button">Convert</button>
            </section>

        </section>
    </section>
}

export default Form