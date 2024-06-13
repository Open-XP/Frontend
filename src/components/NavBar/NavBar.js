import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="my-nav-bar">
      <Link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        rel="stylesheet"
      />
      <div className="nav-bg row">
        <div className="navigation-logo-div col">
          <Link to={"./"} className="logo no-highlight">
            <h1 className="">OpenXP</h1>
          </Link>
        </div>

        <div className="search col">
          <input
            className="searching text-white"
            type="text"
            placeholder="what do you want to learn?"
          />
          <div className="search-icon">
            <i className="fas fa-search fa-2x"></i>
          </div>
        </div>

        <div className="nav-list-item col">
          <ul>
            <li id="list-item" style={{ height: "35px" }}>
              <Link className="no-highlight">Courses</Link>
              <div className="nav-dropdown"></div>
            </li>
            <li id="list-item">
              <Link className="no-highlight">Resources</Link>
            </li>
            <li id="list-item">
              <Link className="no-highlight">About us</Link>
            </li>
            <div className="nav-line"></div>
            <li id="list-item">
              <Link to="/dashboard" className="no-highlight">
                LogIn
              </Link>
            </li>
            <li id="list-item">
              <div className="box">
                <Link to="/signup" className="no-highlight box-text">
                  Start Free
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
