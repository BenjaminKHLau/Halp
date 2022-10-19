import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesThunk } from "../../store/categories";

function GetAllCategories() {
    const dispatch = useDispatch()
    const allCategories = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(getAllCategoriesThunk())
    }, [dispatch])


    return (
        <></>
    )
}

export default GetAllCategories;
