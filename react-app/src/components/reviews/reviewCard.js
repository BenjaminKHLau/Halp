
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getBusinessByIdThunk } from "../../store/businesses";
import { removeReviewThunk } from "../../store/reviews";


export default function ReviewCard({review}) {
    const dispatch = useDispatch
    const history = useHistory();
    const { businessId } = useParams();

    const selectedReviews = useSelector((state) => state.reviews)
    // const revDeets = selectedReviews[Id]

    // console.log("what is my selection", selectedReviews)
    // console.log("review details here", revDeets)

    const removeReview = async (reviewId) => {
        await dispatch(removeReviewThunk(reviewId)).then(() => {
            dispatch(getBusinessByIdThunk(businessId));

            history.push(`/api/businesses/${businessId}`)
        })
    }

    return (
        <div className="review-box">
            <div className="pic-container">
                {review.imageUrl}
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
