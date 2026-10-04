import { NavLink } from "react-router";
import blogIcon from "../assets/blog-icon.png";
import bookDemoIcon from "../assets/book-demo-icon.png";
import caseStudiesIcon from "../assets/case-studies-icon.png";
import developerDocsIcon from "../assets/developer-docs-icon.png";
import howItWorksIcon from "../assets/how-it-works-icon.png";
import integrationsIcon from "../assets/integrations-icon.png";
import roiCalculatorIcon from "../assets/roi-calculator-icon.png";
import mutiple_processors from "../assets/mutiple-processors.svg";

export default function ResourcesMenu() {
  return (
    <div className="resources-tab">
      <section className="resources-grid">
        <a className="resource-item">
          <img className="resource-icon" src={developerDocsIcon} alt="docs" />
          <div className="resource-content">
            <h2 className="resource-title">Developer Docs</h2>
            <p className="resource-description">
              Guides, API references, and integration instructions.
            </p>
          </div>
        </a>
        <a className="resource-item">
          <img className="resource-icon" src={bookDemoIcon} alt="demo" />
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
            src={howItWorksIcon}
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
          <img className="resource-icon" src={blogIcon} alt="blog" />
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
            src={roiCalculatorIcon}
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
            src={caseStudiesIcon}
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
            src={integrationsIcon}
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
      <div className="divider" role="separator" aria-hidden="true"></div>
      <section className="integration-section">
        <img
          className="integration-image"
          src={mutiple_processors}
          alt="mutiple-processors"
        />
        <div className="integration-content">
          <p className="integration-text">
            Connect Churn Solution with your favorite tools in minutes and start
            reducing cancellations instantly.
          </p>
          <a className="cta-button">Get Started</a>
        </div>
      </section>
    </div>
  );
}
