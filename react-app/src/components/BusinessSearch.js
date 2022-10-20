import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, NavLink, useLocation } from "react-router-dom";
import BusinessCardComponent from "./businesses/businessCard";
import './BusinessSearch.css'

function BusinessSearchComponent() {
    const [businesses, setBusinesses] = useState([])
    const location = useLocation()
    let url = new URL(window.location.href)
    const searchParams = url.searchParams

    const category = searchParams.get('category')
    const searchInput = searchParams.get('input')

    const search = category ? category : searchInput;


    let test = async () => {
        let response = await fetch(`/api/businesses/query?search=${search}`)
        setBusinesses(await response.json())
    }

    useEffect(() => {
        test()
    }, [location])

    console.log('businesses is:', businesses)


    return (
        <>
            {businesses.length ? <h1 className="title-search">Search Results For: {search}</h1> : <h1 className="title-search">No Results</h1>}
            {console.log("------------------------")}
            <div className="biz-cate">
                {businesses.map((business) => {
                    return <div className="businesses">
                        <Link to={`/businesses/${business.id}`}>
                            <BusinessCardComponent business={business} />
                            {console.log('busineasfdasdfass is :', business)}
                        </Link>
                    </div>
                })}
            </div>
        </>
    )
}

export default BusinessSearchComponent
