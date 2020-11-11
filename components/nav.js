import Link from 'next/link'

export default function Nav() {
  return (
    <div id="header">
      <div className="w3-top nav">
        <div className="w3-bar w3-white w3-card-2" id="myNavbar">
        <div className="logo">
          <a href="https://www.cosamin.com" className="w3-bar-item w3-button w3-wide">
            <img id="logoId" src="https://stg.cosamin.com/images/CosaminLogo.png" alt="Cosamin Joint Health logo"/></a>
          </div>
          <div className="w3-right w3-hide-small topnav">
            <span>...</span>
          </div>
        </div>
      </div>
    </div>
  )
}
