
// Download app section

import React from "react"

function DownloadApp() {
<<<<<<< HEAD
    return <section className=" container downloadApp-div">   
        <section className="row">

            <section className="col-lg-6 col-sm-12 downloadApp-first-col">
                <img className="downloadApp-img" src="./public/pics/mobile.PNG" alt="mobile-pic" />
            </section>
            
            <section className="col-lg-6 col-sm-12 downloadApp-second-col">
=======
    return <div className=" container downloadApp-div">
        <div className="row">
            <div className="col-lg-6 col-sm-12 downloadApp-first-col">
                <img className="downloadApp-img" src="/pics/mobile.PNG" alt="mobile-pic" />
            </div>
            <div className="col-lg-6 col-sm-12 downloadApp-second-col">
>>>>>>> edf9192b827fa4bc3e8cf865c66131e1bc4e9277
                <h3 className="downloadApp-h3">Download the C-STATS App</h3>
                <p className="downloadApp-p">Check live rates, set rate alerts, receive notifications and more.</p>
                <button type="button" className="downloadApp-button btn btn-primary"><i className="fa-brands fa-apple"></i> Download</button>
                <button type="button" className="downloadApp-button btn btn-primary"><i className="fa-brands fa-google-play"></i> Download</button>
            </section>

        </section>
    </section>
}

export default DownloadApp