import React from 'react'
import Twitter from './img/Twitter.png'
import fb from './img/fb.png'
import ig from './img/IG.png'
import Linkedin from './img/Linkedin.png'
import Git from './img/GitHub.png'

export const Footer = () => {
    return (
        <div className="footerSec">
            <div className="icons">
                <img src={Twitter} alt="" />
                <img src={fb} alt="" />
                <img src={ig} alt="" />
                <img src={Linkedin} alt="" />
                <img src={Git} alt="" />
            </div>
        </div>
    )
}
