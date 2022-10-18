
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getBusinessByIdThunk } from "../../store/businesses";
import { removeReviewThunk } from "../../store/reviews";


export default function ReviewCard({ review }) {
    const dispatch = useDispatch

    const { businessId } = useParams();

    const selectedBusiness = useSelector((state) => state.businesses)

    const removeReview = async (reviewId) => {
        await dispatch(removeReviewThunk(reviewId)).then(() => {
            dispatch(getBusinessByIdThunk(businessId));
        })
    }

    return (
        <div className="review-box">
            <div className="pic-container">
                {review.reviewImageUrl}
            </div>
            <div className="review-written">
                {review.review}
            </div>
            <div className="stars-given">
                Stars: {review.stars}
            </div>
            <button className="delete-button" onClick={()=>removeReview(review.id)}>Delete</button>
        </div>

    )
}
