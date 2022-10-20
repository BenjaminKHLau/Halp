
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getBusinessByIdThunk } from "../../store/businesses";
import { readTheReviewsThunk, removeReviewThunk } from "../../store/reviews";


function ReviewCard({ review }) {
    const dispatch = useDispatch()
    // const history = useHistory();
    const { businessId } = useParams();
    console.log("business id inside review card component: ",businessId)

    // const selectedReviews = useSelector((state) => state.reviews)


    const readReview = async (businessId) => { //???
                await dispatch(readTheReviewsThunk(businessId))
                await dispatch(getBusinessByIdThunk(businessId));

                // history.push(`/api/businesses/${businessId}`)
    }

    const deleteButton = async (e) => {
        e.preventDefault();
        await dispatch(removeReviewThunk(review.id));
        await dispatch(getBusinessByIdThunk(businessId))
        await dispatch(readTheReviewsThunk(businessId))
        // history.push(`/businesses/${businessId}`);
    };

    useEffect(() => {
        dispatch(getBusinessByIdThunk(businessId))
    },[dispatch])



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
                <button className="delete-button" onClick={(e) => deleteButton(e)}>Delete Review</button>
            </div>

        )
    }

    export default ReviewCard