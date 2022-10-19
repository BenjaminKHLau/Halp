import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Redirect } from "react-router-dom"
import { addBusinessThunk } from "../../store/businesses"
import CategoryFormModal from "../categories/categoryModal";
import './businessform.css'

const states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA",
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]

// const cats = ["Entertainment", "Fitness", "Restaurant", "Night Life", "Shopping", "Bakery"]

function BusinessFormComponent() {

    const cats = useSelector(state => state.categories)

    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState(states[0])
    // const [hours, setHours] = useState("")
    const [contact, setContact] = useState("")
    // const [ownerId, setOwnerId] = useState(0)
    const [category, setCategory] = useState(cats[0])
    const [businessImageUrl, setBusinessImageUrl] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [errors, setErrors] = useState([])

    useEffect(() => {
        const currErrors = []
        setErrors([])

        if (!name) currErrors.push('Name is required.')
        if (!description) currErrors.push('Description is required.')
        if (!address) currErrors.push("Address is required.")
        if (!city) currErrors.push("City is required.")
        if (!state) currErrors.push("State is required.")
        if (!contact) currErrors.push("Contact is required.")
        if (isNaN(contact)) currErrors.push("Contact should be a number.")
        if (!category) currErrors.push("Category is required.")
        if (!businessImageUrl) currErrors.push("Image Url is required.")
        setErrors(currErrors)

        if (errors.length) setIsSubmitted(false)

    }, [name, description, address, city, state, contact, category, businessImageUrl])

    async function subby(e) {
        e.preventDefault();
        setIsSubmitted(true);
        if (errors.length > 0) {
            return;
        }

        let newBusiness = await dispatch(
            addBusinessThunk({
                name,
                description,
                address,
                city,
                state,
                contact,
                category,
                businessImage: businessImageUrl
            })
        )

        if(newBusiness.errors) setErrors([...Object.values(newBusiness.errors)])
        else history.push(`/businesses/${newBusiness.id}`)

    }

    const showErrors = errors.map((error) => (
        <div className="error-message" key={error}>
            {error}
        </div>
    ));

    return (
        <form className="business-form" onSubmit={subby}>
            <h2 className="title">ADD YOUR BUSINESS</h2>
            <ul className="errors">{isSubmitted && showErrors}</ul>

            <div className="add-info-label">
                <label>
                    Add information about your business below. Your business page will
                    not appear in search results until this information has been verified and
                    approved by our moderators. Once it is approved, you'll receive an
                    email with instructions on how to claim your business page.
                </label>
            </div>

            <div className="form-css">
                <div className="form-box">
                    <label className="form-stuff">Business Name
                        {/* Name */}
                        <input
                            className="form-input"
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>

                    <label className="form-stuff">Address
                        {/* Address */}
                        <input
                            className="form-input"
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </label>
                    <div className="middle-div">
                        <label className="form-stuff">City
                            {/* City */}
                            <input
                                className="form-input"
                                id="city-input"
                                type="text"
                                name="city"
                                placeholder="City"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </label>

                        <label className="form-stuff">State
                            {/* State */}
                            <select
                                className="form-input"
                                type="text"
                                name="state"
                                placeholder="State"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            >
                                {states.map(state => <option value={state}>{state}</option>
                                )
                                }</select>
                        </label>
                        <label className="form-stuff">Category
                            <select
                                className="form-input"
                                type="text"
                                name="category"
                                placeholder="Category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                {cats.map(category => <option value={category}>{category}</option>
                                )
                                }</select>
                                <CategoryFormModal />
                        </label>
                    </div>
                    {/* <label className="form-stuff">
            <input
              className="form-input"
              type="text"
              name="openHours"
              placeholder="Open Hours"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
            />
          </label>
          <label className="form-stuff">
            <input
              className="form-input"
              type="text"
              name="closeHours"
              placeholder="Close Hours"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
            />
          </label> */}

                    <label className="form-stuff">Phone
                        <input
                            className="form-input"
                            type="text"
                            name="contact"
                            placeholder="Contact Number"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                        />
                    </label>

                    {/* <label className="form-stuff">
            <input
              className="form-input"
              type="number"
              name="ownerId"
              placeholder="Owner's Id"
              value={ownerId}
              onChange={(e) => setOwnerId(e.target.value)}
            />
          </label> */}

                    <label className="form-stuff">Image URL
                        <input
                            className="form-input"
                            type="text"
                            name="businessImage"
                            placeholder="Business Image URL"
                            value={businessImageUrl}
                            onChange={(e) => setBusinessImageUrl(e.target.value)}
                        />
                    </label>

                    <label className="form-stuff">Description
                        <input
                            className="form-input"
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </label>

                </div>

                <div className="submit">
                    <button
                        type="submit"
                        disabled={isSubmitted && errors.length > 0}
                        className={
                            isSubmitted && errors.length > 0 ? "noob" : "submit-button"
                        }
                    >
                        Create Business
                    </button>
                </div>
            </div>
        </form>

    )

}

export default BusinessFormComponent
