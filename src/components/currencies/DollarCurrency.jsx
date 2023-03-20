
// Information about dollar currency

import React from "react"

import Currency from "./Currency";

function DollarCurrency() {
    return <Currency
        currencyHeading="US Dollar Currency"
        headingImage={"../public/pics/dollar.PNG"}
        currencyCode="USD"
        description="The United States dollar is one of the most widely utilized currencies around the globe, both as an official currency and for international trade outside US borders. The dollar is divided into 100 units called pennies or cents."
        firstEconomy="The United States of America has a mixed capitalist economy, which is fueled by abundant natural resources, a well-developed infrastructure, and high productivity."
        secondEconomy="According to the International Monetary Fund, the U.S. GDP of $15 trillion constitutes 23% of global GDP to exchange rates and market more than 20% of global GDP in purchasing power parity."
        thirdtEconomy="Although larger than any other nation, its GDP is 5% smaller than the GDP of the European Union in purchasing power parity in 2008."
        fourthEconomy="The country ranks ninth in the world in nominal GDP per capita and sixth in GDP per capita in PPP. The United States dollar is the main global reserve currency."
        firstHistory="The first dollar coin issued by the United States Mint was similar in size and composition to the Spanish dollar. The Spanish dollar remained legal until 1857."
        secondHistory="The United States dollar was defined by the Coinage Act of 1792."
        thirdHistory="The lion dollar was popular in the Dutch New Netherlands Colony (New York), but also circulated throughout the English colonies during the 17th century and 18th centuries. Examples of this dollar circulating in the colonies were usually used so that the design was not fully distinguishable, so it is sometimes referred to as “dog dollars”."
        fourthHistory="The early currency did not display faces of the presidents, as it does now. George Washington did not want his face to be on the currency."
        class="currency-second-h1"
    />
}

export default DollarCurrency