import React from 'react'
import logo from "../../images/Logo_swiggy.webp";
import fb from "../../images/fb.png";
import insta from "../../images/insta.png";
import pint from "../../images/pint.png";
import twitter from "../../images/twitter.png";

export default function Footer() {
    return (
        <footer>
            <div className="img"><img src={logo} alt='logo' /></div>
            <p>©2022 Swiggy</p>
            <div className="socials">
                <ul>
                    <li><img id="fb" src={fb} alt="fb" /></li>
                    <li><img id="ig" src={insta} alt='insta' /></li>
                    <li><img id="pin" src={pint} alt='pinterest' /></li>
                    <li><img id="twitter" src={twitter} alt='twitter' /></li>
                </ul>
            </div>
        </footer>
    )
}
