import React from 'react';
import Swiggy from  "../../images/Swiggy-logo.png";
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="nav">
            <div className="left-nav">
                <ul>
                    <li>
                        <Link to="#"><img src={Swiggy} alt="Swiggy-logo" />
                        </Link>
                    </li>
                    <li>
                        <Link to=""><b>Set location</b></Link>
                    </li>
                    <li>
                        <Link to="">click here to choose location</Link>
                    </li>
                </ul>
            </div>
            <div className="right-nav">
                <ul>
                    <li><Link to="#">Help</Link></li>
                    <li><Link to="/SignIn">Sign In</Link></li>
                    <li><Link to="#">Cart</Link></li>
                </ul>
            </div>
        </header>
    )
}
