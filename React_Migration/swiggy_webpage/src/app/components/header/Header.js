import React from 'react';
import Swiggy from  "../../images/Swiggy-logo.png";

export default function Header() {
    return (
        <header className="nav">
            <div className="left-nav">
                <ul>
                    <li>
                        <a href="#"><img src={Swiggy} alt="Swiggy-logo" />
                        </a>
                    </li>
                    <li>
                        <a href=""><b>Set location</b></a>
                    </li>
                    <li>
                        <a href="">click here to choose location</a>
                    </li>
                </ul>
            </div>
            <div className="right-nav">
                <ul>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Sign In</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </div>
        </header>
    )
}
