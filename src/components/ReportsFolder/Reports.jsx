
// The reports section

import React from "react"
import MiniReports from "./MiniReports"
import Navbar from "../Navbar"
import Footer from "../Footer"

function Reports() {
    return <section>
        <Navbar />
        <header className="container reports-h1-div"><h1 className="reports-h1">Currency Reports</h1></header>
        <article className="reports-div">
            <h2 className="reports-h2">Latest Currency Watch</h2>
            <MiniReports
                reportHeading="2 March 2023 | UST yields keep pushing higher. Firm DXY "
                firstList="UST yields pushed higher in the Asian session, with 10yrs pushing further above 4.0%. 2x10s UST curve inversion is at multi-year highs. Last night, US auto sales were a little firmer than expected but still softer than in January, while the global manufacturing PMI nudged back to the 50 level, led by the jump in China. Higher yields dragged the DXY index higher and weighed on risk appetite, with US equity futures pushing lower."
                secondList="Japan's weekly International Transaction in Securities data for the week to 24 February showed the heavy selling of foreign bonds in 2022 looks to be behind us. The unusually large net buying in the week to 17 February was followed by more modest net purchases but net purchases none-the-less (¥211bn), extending the buying streak to 4 weeks. The capex data were slightly firmer than expected implying marginal upside for the 2nd estimate of Q4 GDP but company profitability was weak, while consumer confidence was little changed and hints at a limited post-Covid bounce in consumption. Today’s 10yr JGB auction saw solid demand, with the bid/cover at 7.6x, while the rally in 30yr JGBs ran out of steam. USD/JPY pushed higher and sits around 136.85 as Europe opens."
                thirdList="Ahead of today eurozone CPI, the Dutch CPI came in strong. Yesterday, there were a number some speeches of interest. Villeroy noted that ECB rate hikes should be done by September at the latest. Nagel noted that he was a lot more comfortable with current pricing and that APP roll-off might rise to €20bn in July. We suspect that it may rise by more. EUR/USD gave back some of yesterday’s rally overnight and sits at 1.0635 as European trade gets underway. It was a quiet start to trade in the UK with GBP/USD also pushing lower through the Asian session to sit at 1.1975."
                date="2 March 2023"
                link="https://www.mizuhogroup.com/binaries/content/assets/pdf/emea/what-we-do/insights-and-research/research-centre/daily-currency-watch/dcw-23-03-02.pdf"
            />
        </article>
        <Footer />
    </section>
}

export default Reports