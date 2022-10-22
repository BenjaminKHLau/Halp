import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams, useHistory } from "react-router-dom";
import {
  getBusinessByIdThunk,
  deleteBusinessThunk,
} from "../../store/businesses";
import { readTheReviewsThunk } from "../../store/reviews";
import ReviewCard from "../reviews/reviewCard";
import EditBusinessFormModal from "./businessEditFormMODAL";
import "./businessDetails.css";
import "../reviews/reviewForm.css";
import ReviewFormComponent from "../reviews/reviewForm";
import CreateReviewFormModal from "../reviews/revModal";
import UpdateReviewFormModal from "../reviews/updateReviewModal";
import sorrykiwi2 from "../businesses/sorrykiwi2.png";

function GetBusinessDetailsComponent() {
  const { businessId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const [isLoaded, setIsLoaded] = useState(false);
  const [reviewModal, setReviewModal] = useState(false);
  const [reviewObj, setReviewObj] = useState(null);

  const business = useSelector((state) => state.businesses);
  const reviewsState = useSelector((state) => state.reviews);
  const session = useSelector((state) => state.session);

  // console.log("REVIEWS in Business Details component", reviewsState)
  // console.log("business details ACTUAL", businessDetails);
  // console.log("NORMALIZED REVIEWS ARRAY: ", reviewsArray);
  let businessOwner = business[businessId]?.owner_id === session.user?.id;
  // console.log("session user in business details: ", session?.user)
  // console.log("session user in business details: ", session?.user == false)

  const businessDetails = business[businessId];
  const reviewsArray = Object.values(reviewsState);
  const number = businessDetails?.contact;
  const formatnumber = number
    ? "(" +
      number.slice(0, 3) +
      ") " +
      number.slice(3, 6) +
      "-" +
      number.slice(6)
    : null;
  console.log(formatnumber);

  useEffect(() => {
    dispatch(getBusinessByIdThunk(businessId))
    .then(() => dispatch(readTheReviewsThunk(businessId)))
    .then(() => setIsLoaded(true))
  }, [dispatch, isLoaded]);
  // console.log("business id details component", businessId)

  const deleteButton = async (e) => {
    // e.preventDefault();
    await dispatch(deleteBusinessThunk(businessId));

    history.push("/");
  };

  return isLoaded && (
    <>
      <div className="business-stuff">
        {businessDetails && (
          <>
            <div className="business-details-category">
              {businessDetails.category}
            </div>
            <div className="business-details-container-image">
              <img
                src={businessDetails.business_image_url}
                onError={(e) => {
                  e.target.src = sorrykiwi2;
                }}
                className="business-detail-image"
              />
            </div>
          </>
        )}
        {businessDetails && (
          <div className="business-details-container">
            <div className="business-details-name">{businessDetails.name}</div>
            <div className="business-details-bottom-hero-container">
              <div className="business-details-add-desc-container">
                <div className="business-details-address">
                  {businessDetails.address}, {businessDetails.city},{" "}
                  {businessDetails.state}
                </div>
                <div className="business-details-description">
                  {businessDetails.description}
                </div>
              </div>
              <div className="business-details-hero-buttons-container">
                {businessOwner && (
                  <>
                    <EditBusinessFormModal businessId={businessId} />
                    <div
                      className="business-details-delete-business"
                      onClick={() => deleteButton()}
                    >
                      Delete Business
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="business-details-midsection-container">
          <div className="business-details-midsection-left">
            <div className="business-details-midsection-left-wreview">
              {!businessOwner && session?.user && <CreateReviewFormModal />}
            </div>
            <div className="business-details-midsection-left-amenities">
              <h2>Amenities and more</h2>
              <div className="business-details-midsection-left-amenities-p">
                <p>Friendly Environment</p>
                <p>Enjoyable Place</p>
                <p>Supports Inclusion</p>
                <p>Offers Discounts</p>
              </div>
            </div>
          </div>
          <div className="business-details-midsection-right">
            <div className="business-details-midsection-right-close">
              <h2>Waitlist closed</h2>
              <p>This business does not support waitlists</p>
            </div>
            <div className="business-details-midsection-right-contact">
              <h2>Contact</h2>
              <p>{formatnumber}</p>
            </div>
          </div>
        </div>
        <label className="review-label-for-details">Reviews</label>
        <div className="reviews-information">
          {reviewsArray.map((review) => (
            <div key={review.id} className="reviews">
              <ReviewCard
                review={review}
                setReviewModal={setReviewModal}
                setReviewObj={setReviewObj}
              />
            </div>
          ))}
        </div>
      </div>
      {reviewModal && (
        <UpdateReviewFormModal
          setReviewModal={setReviewModal}
          review={reviewObj}
        />
      )}
    </>
  );
}

export default GetBusinessDetailsComponent;
