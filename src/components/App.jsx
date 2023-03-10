
// section of the home page

import React from "react"
import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import Title from "./Title"
import Form from "./Form"
import Converted from "./Converted"
import CurrencyInformation from "./CurrencyInformation"
import Footer from "./Footer"
import DownloadApp from "./DownloadApp"

function App() {

  var [savedAmount, setSavedAmount] = useState("")     // value of user amount input after clicking convert
  var [savedFrom, setSavedFrom] = useState("")     // value of user change from input after clicking convert
  var [savedTo, setSavedTo] = useState("")     // value of user change to input after clicking convert
  var [result, setResult] = useState("")     // API data


  var [validNo, setValidNo] = useState(false)     // Describes if the user entered a valid amount (number) or not
  var [shown, setShown] = useState(false)     // Responsible for showing the results only if the user entered a valid amount (number)

      useEffect(function () {
    fetch(`https://api.currencybeacon.com/v1/convert?api_key=280d6550ce1839946307c723fbec08a2&from=${savedFrom}&to=${savedTo}&amount=${savedAmount}`)
      .then(res => res.json())
      .then(res => {
       const { response } = res
       setResult(response)
      })
     .catch(err => console.log(err))
  }, [savedAmount, savedFrom, savedTo])    

  return (<div>
    <Navbar />
    <Title />
    <Form
      setSavedAmount={setSavedAmount}
      setSavedFrom={setSavedFrom}
      setSavedTo={setSavedTo}
      setShown={setShown}
      savedAmount={savedAmount}
      validNo={validNo}
      setValidNo={setValidNo}
    />
    {!validNo && shown ? <Converted
      savedAmount={savedAmount}
      savedFrom={savedFrom}
      result={result?.value}
      savedTo={savedTo}
    /> : null}
    <CurrencyInformation />
    <DownloadApp />
    <Footer />
  </div>
  )
}

export default App
