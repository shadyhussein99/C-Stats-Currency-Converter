
// Currency information section in the home page

import React from "react"
import MiniCurrencyInformation from "./MiniCurrencyInformation";

function CurrencyInformation() {
    return <section className="container currencyInformation-div">
        <section class="row currencyInformation-row">
            <article class="col-lg-6 col-sm-12">
                <MiniCurrencyInformation
                    headingImage="/pics/dollar.PNG"
                    heading="USD - US Dollar"
                    paragraph="The US dollar (USD) is the official currency of the United States of America. It is the world's most widely traded currency."
                    currencyName="US Dollar"
                    refrence="/dollar-currency"
                />
            </article>
            <article class="col-lg-6 col-sm-12">
                <MiniCurrencyInformation
                    headingImage="/pics/euro.PNG"
                    heading="EUR - Euro"
                    paragraph="The euro (EUR) is the official currency of 19 of the 27 member countries of the European Union. These countries are: Austria, Belgium, Cyprus, Estonia, Finland, France, Germany, Greece, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Portugal, Slovakia, Slovenia and Spain."
                    currencyName="Euro"
                    refrence="/euro-currency"
                />
            </article>
        </section>
        <section class="row currencyInformation-row">
            <article class="col-lg-6 col-sm-12">
                <MiniCurrencyInformation
                    headingImage="/pics/yen.PNG"
                    heading="JPY - JP Yen"
                    paragraph="The JP Yen (JPY) is the official currency of Japan. It is the most safe currency against currency changing rates."
                    currencyName="JP Yen"
                    refrence="/yen-currency"
                />
            </article>
            <article class="col-lg-6 col-sm-12">
                <MiniCurrencyInformation
                    headingImage="/pics/british.PNG"
                    heading="GBP - GB Pound"
                    paragraph="The GB Pound (GBP) is the official currency of the Great Britain. which includes: England, Scotland, Wales and Northern Ireland."
                    currencyName="GB Pound"
                    refrence="/british-currency"
                />
            </article>
        </section>




    </section>
}

export default CurrencyInformation
