import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, NavLink } from "react-router-dom";

function BusinessSearchComponent() {

    let searchResults = []

    console.log('qqqqqqqqq', new URL(window.location.href))

    // async () => {
    //     response = await fetch(`/api/businesses/query/`)
    // }

    return (
        <>
            <h1>Test</h1>
        </>
    )
}

export default BusinessSearchComponent
