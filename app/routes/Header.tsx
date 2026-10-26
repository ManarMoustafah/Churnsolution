import "../App.css";
import { NavLink } from "react-router";
import ResourcesMenu from "./ResourcesMenu";
import HomeMenu from "./HomeMenu";

import logo from "../assets/logo.webp";
import more from "../assets/more.png";
import arrow from "../assets/arrow.png";
import { useState } from "react";

function Header() {
  const [HomeMenuOpen, setHomeMenuOpen] = useState(false);

  return (
    <div className="header">
      <nav className="headerContent">
        <div className="logoContener">
          <div className="hum-ic">
            <button
              onClick={() => setHomeMenuOpen(!HomeMenuOpen)}
              className="moreBtn"
            >
              <img src={more} alt="more" className="moreicon"></img>
            </button>
            {HomeMenuOpen && (
              <div className="HomeMenu">
                <HomeMenu />
              </div>
            )}
          </div>

          <NavLink to="/" className="logoContener">
            <img
              className="logo"
              src={logo}
              alt="logo"
              width="51"
              height="51"
            />
            <span> churn Solution</span>
          </NavLink>
        </div>

        <div className="navbar">
          <NavLink to="/Products">
            Products
            <img src={arrow} className="arrowheader" alt="arrow" />
          </NavLink>
          <div className="Resources">
            <a className="ResourcesLink">
              Resources
              <img src={arrow} className="arrowheader" alt="arrow" />
            </a>
            <div className="ResourcesMenu">
              <ResourcesMenu />
            </div>
          </div>
          <NavLink to="/Pricing">Pricing</NavLink>
          <NavLink to="/CaseStudies">Case Studies</NavLink>
        </div>

        <div className="more">
          <NavLink to="/ContactUs">Contact Us</NavLink>
          <NavLink to="/SignUp">Sign Up</NavLink>
          <NavLink to="/BookDemo" className="BookDemo">
            Book Demo
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Header;
