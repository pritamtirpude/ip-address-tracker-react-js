import { useContext } from "react";
import IPContext from "../context/IPContext";

const DisplayComponent = () => {
  const { trackerData } = useContext(IPContext);

  return (
    <section className="display-container">
      <div className="display-text">
        <div className="input-holder">
          <span>ip address</span>
          <h5>
            {trackerData.ip !== undefined ? trackerData.ip : "192.212.174.101"}
          </h5>
        </div>
        <div className="line"></div>
        <div className="input-holder">
          <span>location</span>
          <h5>
            {trackerData.location !== undefined
              ? trackerData.location.region +
                ", " +
                trackerData.location.country
              : "Brooklyn, NY 10001"}
          </h5>
        </div>
        <div className="line"></div>
        <div className="input-holder">
          <span>timezone</span>
          <h5>
            {trackerData.location !== undefined
              ? "UTC" + trackerData.location.timezone
              : "UTC-05:00"}
          </h5>
        </div>
        <div className="line"></div>
        <div className="input-holder">
          <span>isp</span>
          <h5>
            {trackerData.isp !== undefined
              ? trackerData.isp
              : "SpaceX Starlink"}
          </h5>
        </div>
      </div>
    </section>
  );
};

export default DisplayComponent;
