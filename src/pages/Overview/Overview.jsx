import Topbar from "../../components/Topbar/Topbar";
import "./Overview.scss";
import { IoCallOutline, IoCloudDownloadOutline, FaStar } from "../../Icons";
import AVI from "../../assets/profileavi.jpg";
import Timeline from "../../components/timeline/Timeline";
import OverviewDetails from "../../components/overviewdetails/OverviewDetails"

// import CircularProgress from "../../components/circularprogress/CircularProgress";

const Overview = () => {
  return (
    <div className="overview">
      <Topbar />
      <div className="overview-container">
        <div className="contents">
          <div className="user">
            <div className="user-profile">
              <div className="avi">
                <img src={AVI} alt="profile avi" />
              </div>

              <div className="name">
                <p className="user-name">Mike Wazowski</p>
                <p className="rating">
                  4.8 <FaStar fill="yellow" />
                </p>
              </div>
            </div>

            <div className="user-contact">
              <div className="details">
                <IoCallOutline />
                <p>Contact Details</p>
              </div>

              <div className="user-detail-dwn">
                <IoCloudDownloadOutline className="icon" />
              </div>
            </div>
          </div>

          <Timeline />

          <OverviewDetails />
        </div>

        <div className="progress-chart">
          <div className="title">Hiring Progress</div>

          {/* <CircularProgress
            percentage={25}
            name="Mike"
            message="performs 20% better than others"
          /> */}

          <div className="chart"></div>

          <div className="score-rate">
            <div className="title">Score Rate</div>

            <div className="ratings">
              <div className="rate">
                <div className="details">
                  <p>Collins_cole.pdf</p>
                  <span>Uploaded on 25 Jan 2024</span>
                </div>

                <div className="star">
                  <p>4.8</p> <FaStar fill="black" />
                </div>
              </div>

              <div className="rate">
                <div className="details">
                  <p>Collins_cole.pdf</p>
                  <span>Uploaded on 25 Jan 2024</span>
                </div>

                <div className="star">
                  <p>4.8</p> <FaStar fill="black" />
                </div>
              </div>

              <div className="rate">
                <div className="details">
                  <p>Collins_cole.pdf</p>
                  <span>Uploaded on 25 Jan 2024</span>
                </div>

                <div className="star">
                  <p>4.8</p> <FaStar fill="black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
