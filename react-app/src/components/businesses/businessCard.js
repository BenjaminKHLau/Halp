import { Link } from "react-router-dom";
import "./businessCard.css";

function BusinessCardComponent({ business }) {
  return (
      <div className="Business-card">
        <div className="Business-name">
          {/* <div className="business-image-container"> */}
          <img src={business.business_image_url} className="business-image" />
          {/* </div> */}
          <div className="biz-name">{business.name}</div>
          <div className="biz-address">{business.address}</div>
          <div className="biz-city">{business.city}</div>
          <div className="biz-state">{business.state}</div>
        </div>
      </div>
  );
}

export default BusinessCardComponent;
