import React from "react";
import { Link } from "react-router-dom";

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
              <Link className="footer_menu_bttn">
                <li>Terms</li>
              </Link>
              <Link className="footer_menu_bttn">
                <li>Privacy policy</li>
              </Link>
              <Link className="footer_menu_bttn">
                <li>Help & Support</li>
              </Link>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
