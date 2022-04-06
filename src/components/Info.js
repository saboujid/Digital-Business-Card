import React from 'react'
import Profile from './img/Profile.png'
import email from './img/Mail.png'
export default function Info() {
    return (
        <div className="InfoSec">
            <div className="Prfl">
                <img src={Profile} alt="" />
            </div>
            <div className="name">Laura Smith</div>
            <div className="job">Frontend Developer</div>
            <div className="website">laurasmith.website</div>
            <button>
                <img src={email} alt="" />
                <div className="email">Email</div>
            </button>
            <div className="text">
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3>Interests</h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    )
}