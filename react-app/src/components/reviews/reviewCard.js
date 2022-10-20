
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getBusinessByIdThunk } from "../../store/businesses";
import { readTheReviewsThunk, removeReviewThunk, updateReviewThunk } from "../../store/reviews";
import './reviewCard.css'
import trash from './bin.png'
import edit from './edit.png'


function ReviewCard({ review, setReviewModal, setReviewObj }) {
    const dispatch = useDispatch()
    // const history = useHistory();
    const { businessId } = useParams();
    console.log("business id inside review card component: ", businessId)

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

    const editButton = async (e) => {
        e.preventDefault();
        await dispatch(updateReviewThunk(review))
        await dispatch(getBusinessByIdThunk(businessId))
        await(readTheReviewsThunk(businessId))

    }

    useEffect(() => {
        dispatch(getBusinessByIdThunk(businessId))
    }, [dispatch])

    const handleMyEdit = (e) => {
        setReviewModal(true)
        setReviewObj(review)
    }

    return review && (
        <div className="review-box">
            <div className="pic-container">
                <img src={review.imageUrl} className="review-image" />
            </div>
            <div className="review-written">
                {review.review}
            </div>
            <div className="right-side">
                <div className="stars-given">
                    {review.stars} ★
                </div>
                <div className="misc-items">
                    <button className="edit-button" onClick={handleMyEdit}>
                        <img className='actual-edit' src={edit}></img>
                    </button>
                    <button className="delete-button" onClick={(e) => deleteButton(e)}>
                        <img className='actual-trash' src={trash}></img>
                    </button>
                </div>
            </div>
        </div>

    )
}



export default ReviewCard
