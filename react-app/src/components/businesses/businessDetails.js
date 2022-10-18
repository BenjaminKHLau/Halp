import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams, useHistory } from "react-router-dom";
import {
	getBusinessByIdThunk,
	deleteBusinessThunk,
} from "../../store/businesses";

function GetBusinessDetailsComponent() {
	const { businessId } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();
	const [isLoaded, setIsLoaded] = useState(false);

	const business = useSelector((state) => state.businesses);
	// console.log("business details business variable: ", business);
	const businessDetails = business[businessId];
	console.log("business details ACTUAL", businessDetails);

	useEffect(() => {
		setIsLoaded(true);
		dispatch(getBusinessByIdThunk(businessId));
	}, [dispatch, isLoaded]);
	// console.log("business id details component", businessId)

	const deleteButton = async (e) => {
		e.preventDefault();
		await dispatch(deleteBusinessThunk(businessId));

		history.push("/");
	};

	return (
		isLoaded && (
			<div className="business-stuff">
				{businessDetails && (
					<div className="business-details-container">
						<div className="business-details-info">{businessDetails.name}</div>
						<div className="business-details-info">
							{businessDetails.description}
						</div>
						<div className="business-details-info">
							{businessDetails.address}
						</div>
						<div className="business-details-info">
							{businessDetails.category}
						</div>
						<div className="business-details-info">{businessDetails.city}</div>
						<div className="business-details-info">{businessDetails.state}</div>
						<button className="edit-delete" onClick={(e) => deleteButton(e)}>Delete</button>
					</div>
				)}
			</div>
		)
	);
}

export default GetBusinessDetailsComponent;
