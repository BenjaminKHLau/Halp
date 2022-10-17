


// Action Types
const CREATE_NEW_BUSINESS = "business/CREATE"
const GET_ALL_BUSINESSES = "business/READ"
const UPDATE_BUSINESS = "business/UPDATE"
const DELETE_BUSINESS = "business/DELETE"
const GET_BUSINESS_BY_ID = "businessId/READ"


// Action Creator
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

 // Thunk Action Creator
export const getAllBusinessesThunk = () => async dispatch => {
    const response = await fetch(`/api/businesses`, {
        method: "GET"
    })
    const data = await response.json();
    dispatch(getAllBusinessesACTION(data.allSpots))

    return data
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
        
    default:
    return state;
    }
}

export default BusinessesReducer;