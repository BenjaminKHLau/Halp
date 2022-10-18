import { Link } from "react-router-dom";


function BusinessCardComponent({ business }){
    return (
        <div className="Business-card">
            <div className="Business-name">

                <div><img src={business.business_image_url} className="business-image"/></div>
                <div>{business.name}</div>
                <div>{business.description}</div>
                <div>{business.address}</div>
                <div>{business.city}</div>
                <div>{business.state}</div>
                <div>{business.contact}</div>


            </div>
        </div>
    )
}

export default BusinessCardComponent