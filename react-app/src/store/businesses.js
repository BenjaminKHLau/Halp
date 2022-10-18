
// Action Types
const CREATE_NEW_BUSINESS = "business/CREATE"
const GET_ALL_BUSINESSES = "business/READ"
const UPDATE_BUSINESS = "business/UPDATE"
const GET_BUSINESS_BY_ID = "businessId/READ"
const DELETE_BUSINESS = "business/DELETE"


// Action Creators
const createNewBusinessACTION = (payload) => {
    return {
     type: CREATE_NEW_BUSINESS,
     payload
    }
 }

 const getAllBusinessesACTION = (payload) => {
     return {
     type: GET_ALL_BUSINESSES,
     payload
    }
 }

const updateBusinessACTION = (payload) => {
    return {
     type: UPDATE_BUSINESS,
     payload
    }
 }

const deleteBusinessACTION = (payload) => {
    return {
     type: DELETE_BUSINESS,
     payload
    }
 }
const getBusinessByIdACTION = (payload) => {
    return {
     type: GET_BUSINESS_BY_ID,
     payload
    }
 }

 // Thunk Action Creators
export const getAllBusinessesThunk = () => async dispatch => {
    const response = await fetch(`/api/businesses`, {
        method: "GET"
    })
    const data = await response.json();
    dispatch(getAllBusinessesACTION(data))

    return data
}

export const addBusinessThunk = (business) => async dispatch => {
  const response = await fetch(`/api/businesses`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(business)
  })

  if (response.ok) {
    const newBusiness = await response.json()
    dispatch(createNewBusinessACTION(newBusiness))
    return newBusiness
  }
}

export const updateBusinessThunk = (payload, businessId) => async dispatch => {
    const response = await fetch(`/api/businesses/${businessId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });
    if (response.ok) {
        const updateBis = await response.json();
        dispatch(updateBusinessACTION(updateBis))
    }
    return response
}

export const getBusinessByIdThunk= (businessId) => async dispatch => {
    const response = await fetch(`/api/businesses${businessId}`, {
        method: "GET"
    })
    if (response.ok) {
        const thisBis = await response.json();
        dispatch(getBusinessByIdACTION(thisBis))
        return thisBis;
    }
}

export const removeBusinessThunk= (businessId) => async dispatch => {
    const response = await fetch(`/api/businesses/${businessId}`, {
        method: "DELETE"
    });

    if (response.ok) {
        dispatch(deleteBusinessACTION(businessId))
    }
}

// REDUCER UPDATES STATE
const initialState = {
    businesses: {}
};


const BusinessesReducer = (state = initialState, action) => {
    let newState = {};
    switch(action.type){
        case GET_ALL_BUSINESSES: {
            // normalize data. Turn array into obj
            action.payload.forEach(business => {
                newState[business.id] = business // assign id of each business to the business obj
            })
            return newState
        }
      	case CREATE_NEW_BUSINESS: {
        	newState = {...state}
        	newState[action.payload.id] = action.payload
            return newState;
        }
        case UPDATE_BUSINESS: {
        	newState = {...state}
        	newState[action.payload.id] = action.payload
            return newState;
        }
        case GET_BUSINESS_BY_ID: {
        	newState = {...state}
        	newState[action.payload.id] = action.payload
            return newState;
        }
        case DELETE_BUSINESS: {
            const delState = { ...state }
            delete delState[action.payload]
            return delState;
      	}

    default:
    return state;
    }
}

export default BusinessesReducer;
