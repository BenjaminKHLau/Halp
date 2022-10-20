import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, NavLink } from "react-router-dom";

function BusinessSearchComponent() {
    let url = new URL(window.location.href)
    const searchParams = url.searchParams
    console.log(url, searchParams)
    const category = searchParams.get('category')
    const searchInput = searchParams.get('input')

    console.log('qqqqqqqqq', new URL(window.location.href))
    console.log(category)
    console.log(searchInput)

    const search = category ? category : searchInput;
    console.log(search)

    let test = async () => {
        let response = await fetch(`/api/businesses/query?search=${search}`)
        console.log('response is: ', response)
        let result = await response.json()
        console.log('result is: ', result)
        return result
    }

    console.log('test is', test())


    return (
        <>
            <h1>Test</h1>
        </>
    )
}

export default BusinessSearchComponent
