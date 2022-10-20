import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Redirect } from "react-router-dom"
import { writeReviewThunk } from "../../store/reviews";
import { useParams } from 'react-router-dom';

function ReviewFormComponent() {

    const dispatch = useDispatch()
    const history = useHistory()


    const [review, setReview] = useState("");
    const [stars, setStars] = useState("");
    const [imageUrl, setImageUrl] = useState("")
    const [isCreated, setIsCreated]= useState(false)
    const [errors, setErrors] = useState([]);

    let { businessId } = useParams();
    businessId = Number(businessId);


    useEffect(() => {
        let errorsArray = []
        if(!imageUrl) errorsArray.push("Please provide valid image.")
        if (review.length < 1) errorsArray.push("Please provide a review.")
        else if (stars < 1 || stars > 5) errorsArray.push("Please provide a number between 1 - 5")

        setErrors(errors)


    }, [review, stars, imageUrl])


    let handleSubmit = async (e) => {
        e.preventDefault();

        setIsCreated(true)
        if (errors.length > 0) {
            return;
        }

        dispatch(writeReviewThunk({
            businessId,
            review,
            stars,
            imageUrl,
        }))

        history.push(`/businesses/${businessId}`)


    };

    const ErrorMsgs = errors.map(error => (
        <div className="errors" key={error}>{error}</div>
    ));

    return (
        <div className="create-review-container">
            <div className="encompass-form">
                <form
                    className="review-form" onSubmit={handleSubmit}>
                    <h1 className="review-title">Create a Review</h1>
                    <div className="errors">
                        {isCreated && ErrorMsgs}
                    </div>

                    <label className="create-review">
                        <span> Review: </span>
                        <input
                            type="text"
                            placeholder="Review Text"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            required
                        />
                    </label>

                    <label>
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
                            required
                        />
                    </label>
                    <div className="to-review">
                        <button className="created"
                            type="submit">
                            Create Review
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default ReviewFormComponent;
