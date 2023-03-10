
//Information about euro currency

import React from "react"
import Currency from "./Currency";

function EuroCurrency() {
    return <Currency
        currencyHeading="Euro Currency"
        headingImage="..\public\pics\euro.PNG"
        currencyCode="EUR"
        description="The official currency used in the Eurozone is the euro (EUR). The eurozone consists of the 17 states of the European Union: Austria, Cyprus, Estonia, Portugal, Belgium, Germany, Malta, Portugal, Netherlands, Italy, Ireland, Greece, Luxemburg, France, Slovakia, Spain, and Slovenia. The euro is the second-largest currency that is traded worldwide."
        firstEconomy="The Euro is seen as a macro-economy system. It gives the countries that are part of the eurozone economical stability."
        secondEconomy="Trade industry increased by 5% since the implementation of the Euro."
        thirdtEconomy="Exchange rate risk is reduced for all the countries in the eurozone."
        fourthEconomy="Tourism in the EU countries has also increased by 6.5% because of the common currency."
        firstHistory="In 1992, the euro was established by the Maastricht Treaty."
        secondHistory="Strict rules were given to the member states before they could become part of the eurozone. Two countries were exempt from the rules-the United Kingdom and Denmark."
        thirdHistory="The name was established in 1995, when the euro replaced the “European currency unit”."
        fourthHistory="The euro unofficially replaced the European currency unit in 1999. In 2002, all old currencies were discontinued and replaced by the new euro notes and coins. Member countries discontinued their old notes and coins at different times."
        class="currency-second-h1"
    />

}

export default EuroCurrency