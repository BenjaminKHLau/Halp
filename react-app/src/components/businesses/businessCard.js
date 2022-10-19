import { Link } from "react-router-dom";
import './businessCard.css'
import sorrykiwi2 from "./sorrykiwi2.png"


function BusinessCardComponent({ business }){
    return (
        <div className="Business-card">
            <Link to={`/businesses/${business.id}`}>

            <div className="Business-name">

                {/* <div className="business-image-container"> */}
                    <img src={business.business_image_url} className="business-image" onError={e => {e.target.src=sorrykiwi2}}/>
                    {/* </div> */}
                <div className="biz-name">{business.name}</div>
                <div className="biz-address">{business.address}</div>
                <div className="biz-city">{business.city}</div>
                <div className="biz-state">{business.state}</div>


            </div>
            </Link>
        </div>
    )
}

export default BusinessCardComponent
