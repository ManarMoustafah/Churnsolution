import redDot from "../../assets/redDot.png";
import yellowDot from "../../assets/yellowDot.png";
import greenDot from "../../assets/greenDot.png";

export default function sec1() {
  return (
    <div className="sec1home-all">
      <div className="sec1home-small">
        <section className="sec1home">
          <div className="left-sec1home">
            <h1>
              Stop Customer Churn,
              <span className="BoostRevenue">Boost Revenue</span>{" "}
            </h1>
            <p>
              Churn Solution helps subscription-based companies reduce customer
              churn, recover failed payments, win back cancelled customers, and
              increase customer lifetime value (LTV).
            </p>
            <div className="bouttinDiv">
              <button className="GrowRetentionNow">Grow Retention Now</button>
              <button className="BookFreeDemo">Book a Free Demo</button>
            </div>
            <div className="Trusted">
              <div className="TrustedPic">
                <img
                  decoding="async"
                  src="https://churnsolution.com/wp-content/uploads/2025/12/quizplus-logo.svg"
                  alt="company-logo"
                ></img>
              </div>
              <div className="TrustedPic">
                <img
                  decoding="async"
                  src="https://churnsolution.com/wp-content/uploads/2025/12/quello-logo.svg"
                  alt="company-logo"
                ></img>
              </div>
              <div className="TrustedPic">
                <img
                  decoding="async"
                  src="https://churnsolution.com/wp-content/uploads/2025/12/design-bundles-logo.png"
                  alt="company-logo"
                ></img>
              </div>
              Trusted by fast-growing B2B and B2C subscription businesses
            </div>
          </div>
          <div className="rigth-sec1home">
            <div>
              {/* className="top-rigth-sec1home-all" */}
              <div className="top-rigth-sec1home">
                <div className="SubscriptionPortal">
                  <div className="dots">
                    <img className="dotsPic" src={redDot} alt="" />
                    <img className="dotsPic" src={yellowDot} alt="" />
                    <img className="dotsPic" src={greenDot} alt="" />
                  </div>
                  <p>Subscription Portal</p>
                </div>

                <h3>Manage Your Subscription </h3>
                <div className="ManageYourSubscription">
                  <div>
                    <div className="ManageYourSubscriptionIcon">📅</div>
                    <p className="divp1">Current Plan</p>
                    <p className="divp2">Monthly</p>
                  </div>
                  <div>
                    <div className="ManageYourSubscriptionIcon">💳</div>
                    <p className="divp1">Current Billing</p>
                    <p className="divp2">Dec 11, 2025</p>
                  </div>
                  <div>
                    <div className="ManageYourSubscriptionIcon">🔔</div>
                    <p className="divp1">Next Billing</p>
                    <p className="divp2">Jan 11, 2026</p>
                  </div>
                </div>
                <div className="CancelSubscription">
                  <p className="p1">Cancel Subscription</p>
                  <p className="p2">
                    Are you sure you want to cancel your subscription?
                  </p>
                  <button className="p3">Cancel Subscription</button>
                </div>
              </div>
            </div>
            <p className="CancellationFlowsWork">
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>{" "}
              See how our <span>Cancellation Flows</span> Work
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
