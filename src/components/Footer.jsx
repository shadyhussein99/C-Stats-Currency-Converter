
// footer of the website

import React from "react"

function Footer() {

  const year = new Date().getFullYear();
  
  return <footer>
    <i type="button" className="fa-brands fa-facebook footer-icons"></i>
    <i type="button" className="fa-brands fa-twitter footer-icons"></i>
    <i type="button" className="fa-solid fa-envelope footer-icons"></i>
    <p className="footer-p">Copyright ⓒ {year} C-STATS</p>
  </footer>
}

export default Footer