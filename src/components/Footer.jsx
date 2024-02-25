import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import"../Styles/footer.css"

function Footer() {
  return (
    <div>
  <footer className="footer-distributed">
    <div className="footer-right">
    <TiSocialFacebook className='a'/>
    <TiSocialLinkedin className='a'/>
    <SlSocialInstagram className='a' />
    </div>
    <div className="footer-left">
      <p>Chef Master © 2024</p>
    </div>
  </footer>
</div>

  )
}

export default Footer