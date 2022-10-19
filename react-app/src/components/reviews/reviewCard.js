
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getBusinessByIdThunk } from "../../store/businesses";
import { readTheReviewsThunk, removeReviewThunk } from "../../store/reviews";


export default function ReviewCard({ review }) {
    const dispatch = useDispatch
    const history = useHistory();
    const { businessId } = useParams();

    const selectedReviews = useSelector((state) => state.reviews)
    const placeholderr = selectedReviews[review]

    // useEffect(() => {
    //     dispatch(readTheReviewsThunk(businessId))
    // })
    // const readReview = async (businessId) => {
    //     await dispatch(readTheReviewsThunk(businessId)).then(() => {
    //         dispatch(getBusinessByIdThunk(businessId));

    //         history.push(`/api/businesses/${businessId}`)

    //     })



    const aReview = async (businessId) => {
                await dispatch(readTheReviewsThunk(businessId))
                await  dispatch(getBusinessByIdThunk(businessId));

                    history.push(`/api/businesses/${businessId}`)

        }

    return (
            <div className="review-box">
                <div className="pic-container">
                {selectedReviews.imageUrl}
            </div>
                <div className="review-written">
                    {selectedReviews.review}
                </div>
                <div className="stars-given">
                Stars: {selectedReviews.stars}
            </div>
                <button className="delete-button" onClick={() => aReview(review.id)}>Delete Review</button>
            </div>

        )
    }
