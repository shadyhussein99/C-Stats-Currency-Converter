
// Download app section

import React from "react"

function DownloadApp() {
    return <div className=" container downloadApp-div">
        <div className="row">
            <div className="col-lg-6 col-sm-12 downloadApp-first-col">
                <img className="downloadApp-img" src={"./public/pics/mobile.PNG"} alt="mobile-pic" />
            </div>
            <div className="col-lg-6 col-sm-12 downloadApp-second-col">
                <h3 className="downloadApp-h3">Download the C-STATS App</h3>
                <p className="downloadApp-p">Check live rates, set rate alerts, receive notifications and more.</p>
                <button type="button" className="downloadApp-button btn btn-primary"><i className="fa-brands fa-apple"></i> Download</button>
                <button type="button" className="downloadApp-button btn btn-primary"><i className="fa-brands fa-google-play"></i> Download</button>
            </div>
        </div>
    </div>
}

export default DownloadApp