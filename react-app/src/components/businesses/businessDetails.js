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

function GetBusinessDetailsComponent() {
	const { businessId } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();

	const [isLoaded, setIsLoaded] = useState(false);
	const [reviewModal, setReviewModal] = useState(false);
	const [reviewObj, setReviewObj] = useState(null);

	const business = useSelector((state) => state.businesses);
	const reviewsState = useSelector((state) => state.reviews);
    const session =  useSelector(state => state.session)

    // console.log("session user in business details: ", session)
    // console.log("review author user in business details: ", reviewsState)
    // console.log("business owner in business details: ", business)

	const businessDetails = business[businessId];
	const reviewsArray = Object.values(reviewsState);

    let businessOwner = business[businessId]?.owner_id === session.user.id
    console.log("business Owner Status: ",businessOwner)


	useEffect(() => {
		setIsLoaded(true);
		dispatch(getBusinessByIdThunk(businessId));
		dispatch(readTheReviewsThunk(businessId));
	}, [dispatch, isLoaded]);
	// console.log("business id details component", businessId)

	const deleteButton = async (e) => {
		e.preventDefault();
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
							{businessOwner && (<EditBusinessFormModal businessId={businessId} />)}
							<CreateReviewFormModal />
						</div>
					</div>
				)}
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
