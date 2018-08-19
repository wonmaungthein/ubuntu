import React from "react";
import "./Header.css";
import Logo from "../../components/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const logoStyle = {
  height: 100
};

const Header = () => {
  return (
    <header className="app-header">
      <Router>
        <div>
          <div>
            <img src={Logo} style={logoStyle} alt="logo" />
          </div>
          <ul>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contactUs">Contact Us</Link>
              </li>
              <li>
                <Link to="/shelters">Shelters</Link>
              </li>
              <li>
                <Link to="/referrals">Referrals</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/addresses">Addresses</Link>
              </li>
            </ul>
            {/*         
        <li>ABOUT</li>
        <li>MAKE A FEFERRAL</li>
        <li>DONATIONS</li>
        <li>VOLUNTEERING</li>
        <li>CONTACT</li>
        <li>OTHER ORGANIZATIONS</li> */}
          </ul>
          <div className="socialLogo">
            <span>
              <img src="#" alt="facebook logo" />
              <img src="#" alt="twitter logo" />
              <i class="fab fa-twitter fa-lg" />
              <i class="fab fa-facebook fa-lg" />

              {/* <i class="fas fa-stroopwafel fa-lg" />
              <i class="fas fa-stroopwafel fa-3x" /> */}
            </span>
          </div>
        </div>
      </Router>
    </header>
  );
};

export default Header;
