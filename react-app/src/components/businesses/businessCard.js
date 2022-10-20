import { Link } from "react-router-dom";
import "./businessCard.css";
import sorrykiwi2 from "./sorrykiwi2.png";

function BusinessCardComponent({ business }) {

    let contact = business.contact.split('')
    contact.splice(6,0, '-')
    contact.splice(3,0, '-')
    contact = contact.join("")


  return (
    <div className="Business-card">
      <div className="Business-name">
        <div className="biz-name">{business.name}</div>
        {/* <div className="business-image-container"> */}
        <img
          src={business.business_image_url}
          className="business-image"
          onError={(e) => {
            e.target.src = sorrykiwi2;
          }}
        />
        {/* </div> */}
        <div className="biz-address">
          <span className="business_card_address_bold">Location: </span>
          {`${business.address}, ${business.city}, ${business.state}`}
        </div>

        <div className="biz-contact">
          <p>
            <span className="business_card_contact_bold">Phone: </span>
            {` ${contact}`}
          </p>
        </div>

        {/* <div className="biz-city">{business.city}</div>
                <div className="biz-state">{business.state}</div> */}
      </div>
    </div>
  );
}

export default BusinessCardComponent;
