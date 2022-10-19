import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams, useHistory } from "react-router-dom";
import { getBusinessByIdThunk, deleteBusinessThunk } from "../../store/businesses";
import { readTheReviewsThunk } from "../../store/reviews";
import ReviewCard from "../reviews/reviewCard";
import EditBusinessFormModal from "./businessEditFormMODAL";

function GetBusinessDetailsComponent() {
	const { businessId } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();
	const [isLoaded, setIsLoaded] = useState(false);

	const business = useSelector((state) => state.businesses);

	const businessDetails = business[businessId];

	const reviewsState = useSelector(state => state.reviews)
	const reviewsArray = Object.values(reviewsState)
	console.log("REVIEWS in Business Details component", reviewsState)
	console.log("business details ACTUAL", businessDetails);
	console.log("NORMALIZED REVIEWS ARRAY: ", reviewsArray);


	useEffect(() => {
		setIsLoaded(true);
		dispatch(getBusinessByIdThunk(businessId))
		dispatch(readTheReviewsThunk(businessId))
	}, [dispatch, isLoaded]);
	// console.log("business id details component", businessId)

	const deleteButton = async (e) => {
		e.preventDefault();
		await dispatch(deleteBusinessThunk(businessId));

		history.push("/");
	};

	return (
		isLoaded && (
			<div className="business-stuff">
				{businessDetails && (
					<div className="business-details-container">
						<img src={businessDetails.business_image_url} className="placeholderforbrennon" />
						<div className="business-details-info">{businessDetails.name}</div>
						<div className="business-details-info">
							{businessDetails.description}
						</div>
						<div className="business-details-info">
							{businessDetails.address}
						</div>
						<div className="business-details-info">
							{businessDetails.category}
						</div>
						<div className="business-details-info">{businessDetails.city}</div>
						<div className="business-details-info">{businessDetails.state}</div>
                        <EditBusinessFormModal businessId={businessId} />
						<button className="edit-delete" onClick={(e) => deleteButton(e)}>Delete</button>
					</div>
				)}
				<div className="reviews-information">
					{reviewsArray.map(review => (
						<div className="reviews">
							<ReviewCard review={review} />
						</div>
					))}
					{/* <ReviewCard review={review} /> */}

					</div>
				</div>
		)
	);
}

export default GetBusinessDetailsComponent;
