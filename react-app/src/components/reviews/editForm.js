import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory} from "react-router-dom"
import { updateReviewThunk, readTheReviewsThunk } from "../../store/reviews";

import { getBusinessByIdThunk } from "../../store/businesses";
import './reviewForm.css'

function EditReviewFormComponent({review, setReviewModal}) {

    const dispatch = useDispatch()
    const history = useHistory()

    // const thestate = useSelector(state => state)

    // console.log("editor", thestate)


    const [reviewText, setReviewText] = useState(review.review);
    const [stars, setStars] = useState(review.stars);
    const [imageUrl, setImageUrl] = useState(review.imageUrl)
    const [isSubmitted, setIsSubmitted]= useState(false)
    const [errors, setErrors] = useState([]);

    // let { businessId } = useParams();
    // businessId = Number(businessId);

    useEffect(() => {
        let errorsArray = []
        if(!imageUrl) errorsArray.push("Please provide valid image.")
        if (!review) errorsArray.push("Please provide a review.")
        if (stars < 1 || stars > 5) errorsArray.push("Please provide a number between 1 - 5")

        setErrors(errorsArray)
    }, [reviewText, stars, imageUrl])


    let handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitted(true)
        if (errors.length > 0) {
            return;
        }
        dispatch(updateReviewThunk({
                businessId: review.businessId,
                id: review.id,
                imageUrl,
                review: reviewText,
                stars,
        }))
            .then(setReviewModal(false))

        // dispatch(readTheReviewsThunk(review.businessId))
        // dispatch(getBusinessByIdThunk(review.businessId))

            // .then(setReviewModal(false))
        // history.push(`/businesses/${businessId}`)


    };

    const ErrorMsgs = errors.map(error => (
        <div className="errors" key={error}>{error}</div>
    ));

    return (
        <div className="create-review-container">
            <div className="encompass-form">
                <form
                    className="review-form" onSubmit={handleSubmit}>
                    <h1 className="review-title">Edit your Review</h1>
                    <div className="errors">
                        {isSubmitted && ErrorMsgs}
                    </div>

                    <label className="create-review">
                        <span> Review: </span>
                        <input
                            type="text"
                            placeholder="Review Text"
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            required
                        />
                    </label>

                    <label className="create-stars">
                        <span> Stars (out of 5): </span>
                        <input
                            type="Number"
                            min={1}
                            max={5}
                            placeholder="0"
                            value={stars}
                            onChange={(e) => setStars(e.target.value)}
                            required
                        />
                    </label>
                    <label className="create-review">
                        <span> Review Image: </span>
                        <input
                            type="text"
                            placeholder="Review URL"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            // required
                        />
                    </label>
                    <div className="to-review">
                        <button className={isSubmitted && errors.length > 0 ? "noob" : "submit-button"}
                            type="submit">
                            Submit Review
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default EditReviewFormComponent;
