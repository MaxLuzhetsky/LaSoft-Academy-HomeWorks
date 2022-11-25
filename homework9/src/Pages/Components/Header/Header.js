
import logo from "../img/logo-SA.png"
import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    const [activeCourse , setActiveCourse] = useState(false)
    
    return (
        <>

            <section>
                <div className="header_container">
                    <Link to="/">
                    <img className="header_logo" src={logo} />
                    </Link>
                    <div className="nav_menu_container">
                        <ul className="nav_menu">
                            <Link onClick={() => setActiveCourse(true)} className={activeCourse ? "nav_menu_bttn active" :"nav_menu_bttn" } to="/courses">
                            <li>Courses</li>
                            </Link>
                            <Link className="nav_menu_bttn" to="/teachers">
                            <li><a className="nav_menu_bttn" href="">Teachers</a></li>
                            </Link>
                            <Link  className="nav_menu_bttn"  to="/courses">
                            <li>Prices</li>
                            </Link>
                            <Link  className="nav_menu_bttn"  to="/courses">
                            <li>About us</li>
                            </Link>
                            <Link to="/courses">
                            <li><a className="nav_menu_apply_button" href="">Apply now</a></li>
                            </Link>
                        </ul>
                    </div>

                    <input id="toggle" type="checkbox" />
                    <label for="toggle" className="hamburger">
                        <div className="top-bun" />
                        <div className="meat" />
                        <div className="bottom-bun" />
                    </label>

                    <div className="nav">
                        <div className="nav-wrapper">
                            <nav>
                                <a className="burger_menu_bttn" href="#">Courses</a><br />
                                <a className="burger_menu_bttn" href="#">Teachers</a><br />
                                <a className="burger_menu_bttn" href="#">Prices</a><br />
                                <a className="burger_menu_bttn" href="#">About us</a>

                            </nav>
                        </div>
                    </div>
                </div>
            </section>

        </>


    );
}
