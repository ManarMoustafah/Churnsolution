import { NavLink } from "react-router";
import { useState } from "react";
import arrow from "../assets/arrow.png";
import blogIcon from "../assets/blog-icon.png";
import bookDemoIcon from "../assets/book-demo-icon.png";
import caseStudiesIcon from "../assets/case-studies-icon.png";
import developerDocsIcon from "../assets/developer-docs-icon.png";
import howItWorksIcon from "../assets/how-it-works-icon.png";
import integrationsIcon from "../assets/integrations-icon.png";
import roiCalculatorIcon from "../assets/roi-calculator-icon.png";

export default function HomeMenu() {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  return (
    <div className="navhbar-vertical">
      <NavLink to="/Products" className="menuitem">
        <p style={{ margin: "0px" }}>Products</p>
        <img src={arrow} className="arrow" alt="" />
      </NavLink>

      <div className="ResourceseEvent">
        <a
          className="ResourcesLink menuitem"
          onClick={() => setResourcesOpen(!resourcesOpen)}
        >
          <p style={{ margin: "0px" }}>Resources</p>
          <img src={arrow} className="arrow" alt="" />
        </a>
        {resourcesOpen && (
          <div className="navhbar-vertical-menu">
            <a className="navhbar-vertical-menu-item">
              <img
                className="navhbar-vertical-icon"
                src={developerDocsIcon}
                crossOrigin="anonymous"
                alt="docs"
              />
              <span>Developer Docs</span>
            </a>
            <a className="navhbar-vertical-menu-item">
              <img
                className="navhbar-vertical-icon"
                src={bookDemoIcon}
                crossOrigin="anonymous"
                alt="demo"
              />
              <span>Book Demo</span>
            </a>
            <a className="navhbar-vertical-menu-item">
              <img
                className="navhbar-vertical-icon"
                src={howItWorksIcon}
                crossOrigin="anonymous"
                alt="how-it-works"
              />
              <span>How it works</span>
            </a>
            <a href="/blog/" className="navhbar-vertical-menu-item ">
              <img
                className="navhbar-vertical-icon"
                src={blogIcon}
                crossOrigin="anonymous"
                alt="blog"
              />
              <span>Blog</span>
            </a>
            <a className="navhbar-vertical-menu-item">
              <img
                className="navhbar-vertical-icon"
                src={roiCalculatorIcon}
                crossOrigin="anonymous"
                alt="calculator"
              />
              <span>ROI Calculator</span>
            </a>
            <a className="navhbar-vertical-menu-item">
              <img
                className="navhbar-vertical-icon"
                src={caseStudiesIcon}
                crossOrigin="anonymous"
                alt="case-studies"
              />

              <span>Case Studies</span>
            </a>
            <a className="navhbar-vertical-menu-item">
              <img
                className="navhbar-vertical-icon"
                src={integrationsIcon}
                crossOrigin="anonymous"
                alt="integrations"
              />
              <span>Integrations</span>
            </a>
          </div>
        )}
      </div>

      <NavLink to="/Pricing" className="menuitem">
        Pricing
      </NavLink>

      <NavLink to="/CaseStudies" className="menuitem">
        Case Studies
      </NavLink>
    </div>
  );
}
