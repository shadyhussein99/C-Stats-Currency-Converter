
// Information about yen currency

import React from "react"
import Currency from "./Currency";

function YenCurrency() {
    return <Currency
        currencyHeading="Japanese Yen Currency"
        headingImage="..\public\pics\yen.PNG"
        currencyCode=" JPY"
        description="Introduced in 1871, the Japanese yen (Japanese: 円), or JPY, is the official currency of Japan. The symbol of the yen is ¥, along with JP¥, which is sometimes used to separate the Japanese yen from the Chinese yuan renminbi, which shares the same symbol."
        firstEconomy="The Japanese currency is the third most traded currency in the world after the United States dollar, (USD), and euro (EUR). JPY also ranks as the fourth reserve currency after the United States dollar, euro and British pound (GBP) globally."
        secondEconomy="Japan ranks as the second country in the world in terms of possessing the most foreign exchange reserves, which are worth US$1.3 trillion."
        thirdtEconomy="The Japanese currency often appreciates during times of uncertainty. Therefore the yen is viewed as a safe haven by investors."
        fourthEconomy="In 2020, Japan was the world's third largest national economy by nominal GDP, with the country's GDP being estimated at a little over US$5 trillion."
        firstHistory="The Currency took place in 1871, the Japanese yen was officially introduced by the Meiji government to fix the monetary situation, replacing the mon currency system of the Tokugawa era."
        secondHistory="In 1882, the Bank of Japan was founded to control the money supply."
        thirdHistory="After World War II, the fixed exchange rate of the yen was established to improve the Japanese economy, as a result of the yen losing much of its value, which was set up at 360 JPY per 1 USD."
        fourthHistory="n 1973, the yen became a floating currency."
        class="currency-second-h1"
    />
}

export default YenCurrency