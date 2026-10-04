import { NavLink } from "react-router";

export default function ResourcesMenu() {
  return (
    <div className="resources-tab">
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
      <div className="divider" role="separator" aria-hidden="true"></div>
      <section className="integration-section">
        <img
          className="integration-image"
          src="https://churnsolution.com/wp-content/uploads/2026/01/mutiple-processors.svg"
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
