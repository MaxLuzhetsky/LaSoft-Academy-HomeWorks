import "../index.css"
import logo from "../img/logo-SA.png"
import React from 'react'

export default function Header() {
    return (
        <>

            <section>
                <div className="header_container">
                    <img className="header_logo" src={logo} />
                    <div className="nav_menu_container">
                        <ul className="nav_menu">
                            <li><a className="nav_menu_bttn" href="">Courses</a></li>
                            <li><a className="nav_menu_bttn" href="">Teachers</a></li>
                            <li><a className="nav_menu_bttn" href="">Prices</a></li>
                            <li><a className="nav_menu_bttn" href="">About us</a></li>
                            <li><a className="nav_menu_apply_button" href="">Apply now</a></li>
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
