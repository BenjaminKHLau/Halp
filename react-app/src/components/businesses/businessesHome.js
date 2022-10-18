import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, NavLink } from "react-router-dom";
import { getAllBusinessesThunk } from "../../store/businesses";
import BusinessCardComponent from "./businessCard";


function GetAllBusinesses(){
    const dispatch = useDispatch()
    const allBusinesses = useSelector(state => state.businesses)
    const normalBusinesses = Object.values(allBusinesses)

    // console.log("Businesses Home all Businesses", allBusinesses)

    useEffect(() => {
        dispatch(getAllBusinessesThunk())
    }, [dispatch])


    return (
        <div>

        {allBusinesses && (<div>
            {normalBusinesses.map(business => (
                <div className="businesses">
                    <BusinessCardComponent business={business}/>
                </div>
                ))
            }
        </div>)
        }
        </div>
    )
}

export default GetAllBusinesses;