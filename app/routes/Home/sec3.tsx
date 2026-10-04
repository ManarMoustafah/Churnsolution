import group from "../../assets/group.png";
import trend from "../../assets/trend.png";
import dollar from "../../assets/dollar.png";
import credit from "../../assets/credit-card.png";
import video from "../../assets/video.png";

export default function sec3() {
  return (
    <div className="sec3home-small">
      <div className="sec3home-context">
        <h2 className="sec3home-h2">Proven Results You Can Trust</h2>
        <p className="sec3home-p">
          Real metrics from subscription businesses like yours
        </p>

        <div className="sec3home-div">
          <div className="sec3home-div-card blue">
            <div className="chr-icon">
              <img src={group} width="24" height="24"></img>
            </div>
            <div className="chr-stat-number">40%</div>
            <div className="chr-stat-label">Reduce Churn</div>
          </div>
          <div className="sec3home-div-card green">
            <div className="chr-icon">
              <img src={trend} width="24" height="24"></img>
            </div>
            <div className="chr-stat-number">31%</div>
            <div className="chr-stat-label">Increase Customer LTV</div>
          </div>
          <div className="sec3home-div-card orange">
            <div className="chr-icon">
              <img src={dollar} width="24" height="24"></img>
            </div>
            <div className="chr-stat-number">35%</div>
            <div className="chr-stat-label">Grow Revenue</div>
          </div>
          <div className="sec3home-div-card purpule">
            <div className="chr-icon">
              <img src={credit} width="24" height="24"></img>
            </div>
            <div className="chr-stat-number">84%</div>
            <div className="chr-stat-label">Recover Payments</div>
          </div>
          <div className="sec3home-div-card pink">
            <div className="chr-icon">
              <img src={video} width="24" height="24"></img>
            </div>
            <div className="chr-stat-number">45%</div>
            <div className="chr-stat-label">Boost Win-Back Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
}
