import "../index.css"
import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="footer_container">
                <div className="footer_content">
                    <div>
                        <p className="footer_text">
                            © Simple Art, Inc. 2021 <br /> All rights reserved
                        </p>
                    </div>
                    <div>
                        <ul className="footer_menu">
                            <li><a href="" className="footer_menu_bttn">Terms</a></li>
                            <li><a href="" className="footer_menu_bttn">Privacy policy</a></li>
                            <li><a href="" className="footer_menu_bttn">Help & Support</a></li>
                        </ul>
                    </div>

                </div>
            </footer>
        </>
    );
}
