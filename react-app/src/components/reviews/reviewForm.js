import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Redirect } from "react-router-dom"
import { readTheReviewsThunk, writeReviewThunk } from "../../store/reviews";
import { useParams } from 'react-router-dom';
import './reviewForm.css'

function ReviewFormComponent() {
    const dispatch = useDispatch()
    const history = useHistory()
    let { businessId } = useParams();
    businessId = Number(businessId);
    
    
    const [review, setReview] = useState("");
    const [stars, setStars] = useState(5);
    const [imageUrl, setImageUrl] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [errors, setErrors] = useState([]);
    
    const reviews = useSelector((state) => state.reviews);
    const session =  useSelector(state => state.session)
    const reviewsArr = Object.values(reviews)
    // console.log("review form state: ", reviewsArr)
    // console.log("session state: ", session)

    let haveReview = false;

        let testing = reviewsArr.filter(review => {
            return haveReview = session?.user.id === review?.userId
            // if(haveReview === true)
            // console.log("does this user have a review?: ", haveReview)
        })
// console.log("testing", testing)


    useEffect(() => {
        // dispatch(readTheReviewsThunk(businessId))
        let errorsArray = []
        if (testing.length > 0) errorsArray.push("You already have a review")
        if (!imageUrl) errorsArray.push("Please provide valid image.")
        if (review.length < 1) errorsArray.push("Please provide a review.")
        else if (stars < 1 || stars > 5) errorsArray.push("Please provide a number between 1 - 5")

        setErrors(errorsArray)
    }, [review, stars, imageUrl])


    let handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handle submit errors", errors)
        setIsSubmitted(true)
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
                    <h1 className="review-title">Submit a Review</h1>
                    <div className="errors">
                        {isSubmitted && ErrorMsgs}
                    </div>
                    <div className="submit-div">
                        <label className="create-review">
                            <span> Review: </span>
                            <input
                                type="text"
                                placeholder="Review Text"
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                // required
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
                                // required
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
                    </div>
                    <div className="to-review">
                        <button className={isSubmitted && errors.length > 0 ? "noob3" : "submit-button3"}
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
