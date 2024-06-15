import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-row">
      <div className="footer-col">
        <div id="foot-individual-container" className="footer-openxp">
          <div className="footer-head">
            <p>OpenXP</p>
          </div>
          <ul className="footer-text-align f-icon-align">
            <li>
              <div>
                <img
                  className="footer-icon-control"
                  src={require("../../../icons/instagram-logo-f.png")}
                />
              </div>
            </li>
            <li>
              <div className="footer-icon-control">
                <img
                  className="footer-icon-control"
                  src={require("../../../icons/facebook-f.png")}
                />
              </div>
            </li>
            <li>
              <div className="footer-icon-control">
                <img
                  className="footer-icon-control"
                  src={require("../../../icons/twitter-f.png")}
                />
              </div>
            </li>
          </ul>
        </div>
        <div id="foot-individual-container">
          <div className="footer-head">
            <p>About</p>
          </div>
          <ul className="footer-text-align">
            <li>
              <Link>News</Link>
            </li>
            <li>
              <Link>Impact</Link>
            </li>
            <li>
              <Link>Community</Link>
            </li>
          </ul>
        </div>
        <div id="foot-individual-container">
          <div className="footer-head">
            <p>Contact Us</p>
          </div>
          <ul className="footer-text-align">
            <li>
              <Link>News</Link>
            </li>
            <li>
              <Link>Impact</Link>
            </li>
            <li>
              <Link>Community</Link>
            </li>
          </ul>
        </div>
        <div id="foot-individual-container">
          <div className="footer-head">
            <p>Exam Library</p>
          </div>
          <ul className="footer-text-align">
            <li>
              <Link>TOFEL</Link>
            </li>
            <li>
              <Link>Jamb</Link>
            </li>
            <li>
              <Link>WAEC</Link>
            </li>
            <li>
              <Link>NECO</Link>
            </li>
            <li>
              <Link>NABTEB</Link>
            </li>
            <li>
              <Link>IGCSE</Link>
            </li>
            <li>
              <Link>ICAN</Link>
            </li>
            <li>
              <Link>SAT</Link>
            </li>
          </ul>
        </div>
        <div id="foot-individual-container">
          <div className="footer-head">
            <p>Community</p>
          </div>
          <ul className="footer-text-align">
            <li>
              <Link>Whatsapp</Link>
            </li>
            <li>
              <Link>Disord</Link>
            </li>
            <li>
              <Link>Slack</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
