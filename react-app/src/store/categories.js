// Action Types
const GET_ALL_CATEGORIES = "category/READ"
const CREATE_CATEGORY = "category/ADD"

// ACTION Creators
const getAllCategoriesACTION = payload => {
    return {
        type: GET_ALL_CATEGORIES,
        payload
    }
}

const createCategoryACTION = payload => {
    return {
        type: CREATE_CATEGORY,
        payload
    }
}

// Thunk Action Creators
export const getAllCategoriesThunk = () => async dispatch => {
    const response = await fetch('api/categories')
    console.log("Get ALL CATEGORIES THUNK RUNNING")

    const data = await response.json();
    console.log("Get ALL CATEGORIES THUNK RUNNING data", data)
    if (response.ok) {
        dispatch(getAllCategoriesACTION(data))
    }

    return data
}

export const createCategoryThunk = type => async dispatch => {
    console.log("Create CATEGORIES THUNK RUNNING data", type)
    const response = await fetch('api/categories', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(type)
    })

    const data = await response.json()
    if (response.ok) {
        dispatch(createCategoryACTION(data))
    }
    return data
}

const initialState = []

const CategoriesReducer = (state = initialState, action) => {
    let newState = [];
    switch(action.type) {
        case GET_ALL_CATEGORIES: {
            return [...action.payload]
        }
        case CREATE_CATEGORY: {
            newState = [...state]
            newState.push(action.payload)
            return newState
        }

        default:
            return state
    }
}

export default CategoriesReducer;
