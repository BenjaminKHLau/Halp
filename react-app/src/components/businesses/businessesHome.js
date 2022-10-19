import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, NavLink } from "react-router-dom";
import { getAllBusinessesThunk } from "../../store/businesses";
import BusinessCardComponent from "./businessCard";
import BusinessFormModal from "./businessFormMODAL";
import homepic from './homepic.jpg'
import './businessHome.css'

function GetAllBusinesses() {
    const dispatch = useDispatch()
    const allBusinesses = useSelector(state => state.businesses)
    const normalBusinesses = Object.values(allBusinesses)

    // console.log("Businesses Home all Businesses", allBusinesses)

    useEffect(() => {
        dispatch(getAllBusinessesThunk())
    }, [dispatch])


    return (
        <>
        <div>
            <img className="home-pic" src={homepic}></img>
            <div className="slogan-container">
            <span className="slogan">We know you're hangry! </span>
            <span className="slogan">Let us halp!</span>
            </div>

        </div>
            <div>
                {allBusinesses && (<div className="businesses-outer-container">
                    {normalBusinesses.map(business => (
                        <div className="businesses">
                            <BusinessCardComponent business={business} />
                        </div>
                    ))
                    }
                </div>)
                }
            </div>
        </>
    )
}

export default GetAllBusinesses;
