import { NavLink } from "react-router";
import { useState } from "react";
import arrow from "../assets/arrow.png";

export default function HomeMenu() {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  return (
    <div>
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
                    src="https://churnsolution.com/wp-content/uploads/2026/01/developer-docs-icon.png"
                    alt="docs"
                  />
                  <span>Developer Docs</span>
                </a>
                <a className="navhbar-vertical-menu-item">
                  <img
                    className="navhbar-vertical-icon"
                    src="https://churnsolution.com/wp-content/uploads/2026/01/book-demo-icon.png"
                    alt="demo"
                  />
                  <span>Book Demo</span>
                </a>
                <a className="navhbar-vertical-menu-item">
                  <img
                    className="navhbar-vertical-icon"
                    src="https://churnsolution.com/wp-content/uploads/2026/01/how-it-works-icon.png"
                    alt="how-it-works"
                  />
                  <span>How it works</span>
                </a>
                <a href="/blog/" className="navhbar-vertical-menu-item ">
                  <img
                    className="navhbar-vertical-icon"
                    src="https://churnsolution.com/wp-content/uploads/2026/01/blog-icon.png"
                    alt="blog"
                  />
                  <span>Blog</span>
                </a>
                <a className="navhbar-vertical-menu-item">
                  <img
                    className="navhbar-vertical-icon"
                    src="https://churnsolution.com/wp-content/uploads/2026/01/roi-calculator-icon.png"
                    alt="calculator"
                  />
                  <span>ROI Calculator</span>
                </a>
                <a className="navhbar-vertical-menu-item">
                  <img
                    className="navhbar-vertical-icon"
                    src="https://churnsolution.com/wp-content/uploads/2026/04/case-studies-icon.png"
                    alt="case-studies"
                  />

                  <span>Case Studies</span>
                </a>
                <a className="navhbar-vertical-menu-item">
                  <img
                    className="navhbar-vertical-icon"
                    src="https://churnsolution.com/wp-content/uploads/2026/08/integrations-icon.png"
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

      {/* 

      <section className="resources-grid">
        <a className="resource-item">
          <img
            className="resource-icon"
            src="https://churnsolution.com/wp-content/uploads/2026/01/developer-docs-icon.png"
            alt="docs"
          />
          <div className="resource-content">
            <h2 className="resource-title">Developer Docs</h2>
            <p className="resource-description">
              Guides, API references, and integration instructions.
            </p>
          </div>
        </a>
        <a className="resource-item">
          <img
            className="resource-icon"
            src="https://churnsolution.com/wp-content/uploads/2026/01/book-demo-icon.png"
            alt="demo"
          />
          <div className="resource-content">
            <h2 className="resource-title">Book Demo</h2>
            <p className="resource-description">
              Schedule a live demo with our team.
            </p>
          </div>
        </a>
        <a className="resource-item">
          <img
            className="resource-icon"
            src="https://churnsolution.com/wp-content/uploads/2026/01/how-it-works-icon.png"
            alt="how-it-works"
          />
          <div className="resource-content">
            <h2 className="resource-title">How it works</h2>
            <p className="resource-description">
              Step-by-step overview of our platform.
            </p>
          </div>
        </a>
        <NavLink
          to="/Blog"
          // data-match="blog"
          //  href="/blog/"
          className="resource-item"
        >
          <img
            className="resource-icon"
            src="https://churnsolution.com/wp-content/uploads/2026/01/blog-icon.png"
            alt="blog"
          />
          <div className="resource-content">
            <h2 className="resource-title">Blog</h2>
            <p className="resource-description">
              Articles, tips, and case studies on retention.
            </p>
          </div>
        </NavLink>
        <a className="resource-item">
          <img
            className="resource-icon"
            src="https://churnsolution.com/wp-content/uploads/2026/01/roi-calculator-icon.png"
            alt="calculator"
          />
          <div className="resource-content">
            <h2 className="resource-title">ROI Calculator</h2>
            <p className="resource-description">
              Estimate revenue saved and potential growth.
            </p>
          </div>
        </a>
        <a className="resource-item">
          <img
            className="resource-icon"
            src="https://churnsolution.com/wp-content/uploads/2026/04/case-studies-icon.png"
            alt="case-studies"
          />
          <div className="resource-content">
            <h2 className="resource-title">Case Studies</h2>
            <p className="resource-description">
              Explore how teams reduced churn and grew revenue.
            </p>
          </div>
        </a>
        <a className="resource-item integrations-content">
          <img
            className="resource-icon"
            src="https://churnsolution.com/wp-content/uploads/2026/08/integrations-icon.png"
            alt="integrations"
          />
          <div className="resource-content ">
            <h2 className="resource-title">Integrations</h2>
            <p className="resource-description">
              Connect your gateway and tools in minutes.
            </p>
          </div>
        </a>
      </section> 
      */}
    </div>
  );
}
