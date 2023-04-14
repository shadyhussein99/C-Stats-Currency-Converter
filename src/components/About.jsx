
// The About section

import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

function About() {
    return <div>
        <Navbar />
        <header className="container about-h1-div"><h1 className="about-h1">ABOUT US</h1></header>
        <section className="about-div">
            <h2 className="about-h2">Why use C-STATS?</h2>
            <ul>
                <li className="about-li">Our team works together always thinking on how to improve our clients' experience.</li>
                <li className="about-li">A comparison website where it is easy to compare between global currencies and live exchange rates at that time.</li>
                <li className="about-li">Our clients' requests are provided for by a team of dedicated and experienced currency exchange consultants</li>
                <li className="about-li">All the services and information served to our users are for free to help our users to be up to date to the global market and be aware of the latest conditions of currencies exchanging rate according to live information.</li>
                <li className="about-li">Giving our users the best experience and the simplest way to keep ana eye on the latest currency changes.</li>
            </ul>
        </section>
        <Footer />
    </div>
}

export default About

// the first paragraph with larger font and lighter font-weight