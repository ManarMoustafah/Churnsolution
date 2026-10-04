import logo from "../assets/logo.png";
import image53x from "../assets/image-5@3x.png";
import stripe_app_marketplace from "../assets/stripe_app_marketplace.png";
import churn_solution from "../assets/churn-solution.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-contan">
        <div className="footer-brand-section">
          <div className="footer-brand-content">
            <img
              src={logo}
              width="35"
              height="35px"
              className="footer-logo"
              alt="churnsolution"
            ></img>
            <h1>Churn Solution</h1>
            <p> Reduce Churn and Retain more subscribers.</p>
          </div>
          <img className="footer-brand-img" src={image53x} />
        </div>

        <nav className="footer-navigation">
          <div className="footer-nav-column">
            <h2 className="footer-nav-heading">Products</h2>
            <ul className="footer-nav-list">
              <li>
                <a href="/products/cancellation-flows/">
                  Cancellation Flows
                </a>{" "}
              </li>
              <li>
                <a href="/products/reactivation/">
                  Reactivation Campaigns
                </a>{" "}
              </li>
              <li>
                <a href="/products/payment-recovery/">
                  {" "}
                  Dunning Email Automation
                </a>{" "}
              </li>
              <li>
                <a href="/products/churn-metrics/">Churn Metrics</a>{" "}
              </li>
              <li>
                <a href="/products/feedback-analysis/">AI Feedback Analysis</a>
              </li>
              <li>
                <a href="/products/customer-portal/">Customer Portal</a>{" "}
              </li>
              <li>
                <a href="/products/smart-retries/">Smart Retries</a>{" "}
              </li>
              <li>
                <a href="/products/mcp-server/">MCP Server</a>{" "}
              </li>
            </ul>
          </div>
          <div className="footer-nav-column">
            <h2 className="footer-nav-heading">Features</h2>
            <ul className="footer-nav-list">
              <li>
                <a href="/products/ab-experiments">A/B Experiments</a>{" "}
              </li>
              <li>
                <a href="/products/customer-segmentation/">
                  Customer Segmentation{" "}
                </a>{" "}
              </li>
              <li>
                <a href="/products/exit-surveys/">Exit Survey</a>{" "}
              </li>
              <li>
                <a href="/products/session-recording/">
                  Session Recording
                </a>{" "}
              </li>
              <li>
                <a href="/products/dynamic-offers/">Dynamic Offers</a>{" "}
              </li>
              <li>
                <a href="/products/custom-branding/">Custom Branding</a>{" "}
              </li>
              <li>
                <a href="/products/easy-setup/">Easy Setup</a>{" "}
              </li>
              <li>
                <a href="/products/pause-wall/">Pause Wall</a>{" "}
              </li>
              <li>
                <a href="/products/payment-wall/">Payment Wall</a>{" "}
              </li>
            </ul>
          </div>
          <div className="footer-nav-column">
            <h2 className="footer-nav-heading">Learn</h2>
            <ul className="footer-nav-list">
              <li>
                <a
                  href="/demo/"
                  target="_blank"
                  data-event-action="book_demo"
                  data-event-category="cta"
                  data-event-label="header_book_demo"
                  data-event-from="WP-footer"
                >
                  Get a demo
                </a>
              </li>
              <li>
                <a href="/docs/install/">Developer Docs</a>
              </li>
              <li>
                <a
                  href="#"
                  //   onClick={() => goToPage('contact-us')}
                  data-event-action="navigate_to_app"
                  data-event-category="navigation"
                  data-event-label="contact-us"
                  data-event-from="WP-footer"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/how-it-works/">How it works</a>
              </li>
              <li>
                <a href="/blog/">Blogs</a>
              </li>
            </ul>

            <h2 className="footer-nav-heading">Explore</h2>
            <ul className="footer-nav-list">
              <li>
                <a href="/pricing/">Pricing</a>{" "}
              </li>
              <li>
                <a href="/integrations/">Integrations</a>
              </li>
              <li>
                <a href="/calculator/">ROI Calculator</a>
              </li>
            </ul>
          </div>
          <div className="footer-nav-column">
            <h2 className="footer-nav-heading">Legal</h2>
            <ul className="footer-nav-list">
              <li>
                <a href="/terms-of-use/">Terms of use</a>
              </li>
              <li>
                {" "}
                <a href="/privacy-policy/">Privacy policy</a>
              </li>
              <li>
                <a href="/data-protection/">Data Protection &amp; GDPR</a>
              </li>
            </ul>
            <h2 className="footer-nav-heading">Case Studies</h2>
            <ul className="footer-nav-list">
              <li>
                <a href="/case-studies/healthcare/">Healthcare</a>{" "}
              </li>
              <li>
                <a href="/case-studies/edutech/">EduTech</a>{" "}
              </li>
              <li>
                <a href="/case-studies/digital-marketplace/">
                  {" "}
                  Digital Marketplace
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="footer-social-section">
          <div className="footer-social-group">
            <p className="footer-stripe-text">
              Our Stripe App tracks and reduces churn
            </p>
            <figure className="footer-stripe-badge">
              <a
                href="https://marketplace.stripe.com/apps/churn-solution"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  decoding="async"
                  src={stripe_app_marketplace}
                  className="footer-brand-img"
                />
              </a>
            </figure>
            <figure className="footer-stripe-badge">
              <a
                href="https://churntools.com/tools/churn-solution?utm_source=churnsolution.com&amp;utm_medium=referral"
                target="_blank"
                data-event-action="featured"
                data-event-category="featured"
                data-event-label="featured"
                data-event-from="WP-footer"
              >
                <img
                  className="footer-brand-img"
                  src={churn_solution}
                  alt="Churn Solution on ChurnTools"
                />
              </a>
            </figure>
          </div>
          <nav className="footer-social-links" aria-label="Social Media Links">
            <a
              href="https://www.facebook.com/churn.solution"
              target="_blank"
              className="footer-social-icon"
              aria-label="Facebook"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10.5675C0 15.7922 3.79457 20.1367 8.75737 21.0177V13.4277H6.13016V10.5088H8.75737V8.17326C8.75737 5.54605 10.4502 4.08707 12.8444 4.08707C13.6028 4.08707 14.4208 4.20354 15.1792 4.32001V7.0059H13.8367C12.5519 7.0059 12.2603 7.64781 12.2603 8.46575V10.5088H15.0627L14.5959 13.4277H12.2603V21.0177C17.2231 20.1367 21.0177 15.793 21.0177 10.5675C21.0177 4.75525 16.2887 0 10.5088 0C4.72898 0 0 4.75525 0 10.5675Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/churnsolution/"
              target="_blank"
              className="footer-social-icon"
              aria-label="Instagram"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.997 6.99851C8.97722 6.99851 7.32888 8.57195 7.32888 10.5C7.32888 12.4281 8.97722 14.0015 10.997 14.0015C13.0169 14.0015 14.6652 12.4281 14.6652 10.5C14.6652 8.57195 13.0169 6.99851 10.997 6.99851ZM21.9988 10.5C21.9988 9.05002 22.0125 7.61317 21.9272 6.16582C21.8419 4.48469 21.4402 2.99268 20.1523 1.76335C18.8617 0.53139 17.3014 0.150507 15.5403 0.0690774C14.0213 -0.0123526 12.516 0.000781319 10.9998 0.000781319C9.4808 0.000781319 7.97556 -0.0123526 6.45931 0.0690774C4.69815 0.150507 3.13513 0.534016 1.84728 1.76335C0.556684 2.9953 0.157672 4.48469 0.0723655 6.16582C-0.0129406 7.6158 0.000818509 9.05265 0.000818509 10.5C0.000818509 11.9474 -0.0129406 13.3868 0.0723655 14.8342C0.157672 16.5153 0.559436 18.0073 1.84728 19.2367C3.13788 20.4686 4.69815 20.8495 6.45931 20.9309C7.97831 21.0124 9.48355 20.9992 10.9998 20.9992C12.5188 20.9992 14.024 21.0124 15.5403 20.9309C17.3014 20.8495 18.8645 20.466 20.1523 19.2367C21.4429 18.0047 21.8419 16.5153 21.9272 14.8342C22.0153 13.3868 21.9988 11.95 21.9988 10.5ZM10.997 15.8875C7.87374 15.8875 5.35309 13.4814 5.35309 10.5C5.35309 7.51861 7.87374 5.11248 10.997 5.11248C14.1203 5.11248 16.641 7.51861 16.641 10.5C16.641 13.4814 14.1203 15.8875 10.997 15.8875ZM16.8722 6.15006C16.1429 6.15006 15.554 5.58793 15.554 4.89184C15.554 4.19574 16.1429 3.63361 16.8722 3.63361C17.6014 3.63361 18.1903 4.19574 18.1903 4.89184C18.1905 5.05713 18.1565 5.22083 18.0904 5.37358C18.0242 5.52633 17.9271 5.66512 17.8047 5.782C17.6822 5.89888 17.5369 5.99155 17.3768 6.05471C17.2168 6.11787 17.0453 6.15027 16.8722 6.15006Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/churn-solution"
              target="_blank"
              className="footer-social-icon"
              aria-label="linkedin"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                style={{ scale: 0.916666666667 }}
              >
                <path
                  d="M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z"
                  fill="currentColor"
                ></path>
                <path
                  d="M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z"
                  fill="#0F124D"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@ChurnSolution-com"
              target="_blank"
              className="footer-social-icon"
              aria-label="YouTube"
            >
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="10.7329"
                  cy="11.0903"
                  r="10.7329"
                  fill="currentColor"
                ></circle>
                <path
                  d="M15.784 10.0646L8.32603 7.07271C8.19085 7.01695 8.04247 6.99262 7.89433 7.00194C7.74618 7.01126 7.60292 7.05392 7.47751 7.12608C7.3521 7.19824 7.24848 7.29762 7.17602 7.41523C7.10356 7.53285 7.06455 7.66499 7.0625 7.79971V14.175C7.06501 14.3131 7.10506 14.4485 7.17911 14.5692C7.25315 14.6898 7.3589 14.7921 7.48696 14.8668C7.61502 14.9415 7.76143 14.9863 7.91318 14.9973C8.06493 15.0083 8.21733 14.9852 8.35685 14.9299L15.784 11.6584C15.9217 11.5932 16.0391 11.4975 16.1252 11.3802C16.2114 11.2629 16.2636 11.1278 16.2771 10.9873C16.2921 10.9134 16.2921 10.8376 16.2771 10.7636C16.288 10.6146 16.246 10.4663 16.1572 10.3405C16.0685 10.2147 15.9377 10.118 15.784 10.0646Z"
                  fill="#0F124D"
                ></path>
              </svg>
            </a>
            <a
              href="mailto:info@churnsolution.com"
              className="footer-social-icon"
              aria-label="Email"
            >
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="10.7329"
                  cy="11.0903"
                  r="10.7329"
                  fill="white"
                ></circle>
                <g>
                  <path
                    d="M17.7279 7.00033C17.7279 6.26699 17.1279 5.66699 16.3945 5.66699H5.72786C4.99453 5.66699 4.39453 6.26699 4.39453 7.00033M17.7279 7.00033V15.0003C17.7279 15.7337 17.1279 16.3337 16.3945 16.3337H5.72786C4.99453 16.3337 4.39453 15.7337 4.39453 15.0003V7.00033M17.7279 7.00033L11.0612 11.667L4.39453 7.00033"
                    stroke="#0F124D"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_2766_7094">
                    <rect
                      width="16"
                      height="16"
                      fill="currentColor"
                      transform="translate(3.0625 3)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </a>
          </nav>
          <p id="chrCopyright" className="footer-copyright">
            © 2026 Churn Solution, LLC. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
