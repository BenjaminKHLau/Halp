
// Action Types
const WRITE_REVIEW = "reviews/CREATE"
const LOAD_REVIEW = "reviews/READ"
const UPDATE_REVIEW = "reviews/UPDATE"

const DELETE_REVIEW = "reviews/DELETE"


// Action Creators
const writeRevAction= (payload) => {
    return {
     type: WRITE_REVIEW,
     payload
    }
 }

 const readRevsAction = (payload) => {
     return {
     type: LOAD_REVIEW,
     payload
    }
 }

const updateRevAction= (payload) => {
    return {
     type: UPDATE_REVIEW,
     payload
    }
 }

const deleteRevAction = (payload) => {
    return {
     type: DELETE_REVIEW,
     payload
    }
 }


 // Thunk Action Creators
export const readTheReviewsThunk = (businessId) => async dispatch => {
    const response = await fetch(`/api/businesses/${businessId}/reviews`, {
        method: "GET"
    })
    const data = await response.json();
    // console.log("what is my review?", data)
    dispatch(readRevsAction(data))

    return data;
}

export const writeReviewThunk = ({ businessId, imageUrl, review, stars }) => async dispatch => {
  const response = await fetch(`/api/businesses/${businessId}/reviews`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({businessId, imageUrl, review, stars})
  })

  if (response.ok) {
    const newRev = await response.json()
    dispatch(writeRevAction(newRev))
      return newRev;
  }
}

export const updateReviewThunk = (payload, reviewId) => async dispatch => {
    const response = await fetch(`/api/reviews/${reviewId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });
    if (response.ok) {
        const editRev = await response.json();
        dispatch(updateRevAction(editRev))
    }
    return response
}


export const removeReviewThunk= (reviewId) => async dispatch => {
    const response = await fetch(`/api/reviews/${reviewId}`, {
        method: "DELETE"
    });

    if (response.ok) {
        dispatch(deleteRevAction(reviewId))
    }
    return response;
}

// REDUCER UPDATES STATE
const initialState = {};



const ReviewsReducer = (state = initialState, action) => {
        switch (action.type) {
            case LOAD_REVIEW: {
                const reviewsObjState = {};
                action.payload.Reviews.forEach(review => {
                    reviewsObjState[review.id] = review;
                })
                return reviewsObjState
            };
            case UPDATE_REVIEW: {
                const newState = {};
                action.payload.Reviews.forEach(review => {
                    newState[review.id] = review;
                })
                return newState;
            };
            case WRITE_REVIEW: {
                const newState = {...state};
                newState[action.payload.id] = action.payload;
                return newState;
            };
            case DELETE_REVIEW: {
                const delState = { ...state };
                delete delState[action.reviewId]
                return delState;
            };
            default: return state
        }

    }

export default ReviewsReducer;
