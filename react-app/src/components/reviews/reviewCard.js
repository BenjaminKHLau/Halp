
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getBusinessByIdThunk } from "../../store/businesses";
import { readTheReviewsThunk, removeReviewThunk } from "../../store/reviews";


export default function ReviewCard({ review }) {
    const dispatch = useDispatch
    const history = useHistory();
    // const { businessId } = useParams();

    // const selectedReviews = useSelector((state) => state.reviews)


    const aReview = async (businessId) => {
                await dispatch(readTheReviewsThunk(businessId))
                await  dispatch(getBusinessByIdThunk(businessId));

                    history.push(`/api/businesses/${businessId}`)
    }

    return review && (
            <div className="review-box">
                <div className="pic-container">
                <img src={review.imageUrl} className="review-image"/>
            </div>
                <div className="review-written">
                    {review.review}
                </div>
                <div className="stars-given">
                Stars: {review.stars}
            </div>
                <button className="delete-button" onClick={() => aReview(review.id)}>Delete Review</button>
            </div>

        )
    }
