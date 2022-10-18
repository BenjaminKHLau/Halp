import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Redirect } from "react-router-dom"
import { addBusinessThunk } from "../../store/businesses"
import './businessform.css'

const states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA",
          "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
          "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
          "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
          "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]

const cats = ["Entertainment", "Fitness", "Restaurant", "Night Life", "Shopping", "Bakery"]

function BusinessFormComponent(){

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

    },[])

    async function subby(e) {
        e.preventDefault();
        setIsSubmitted(true);
        if (errors.length > 0) {
          return;
        }

        const newBusiness = await dispatch(
          addBusinessThunk({
            name,
            description,
            address,
            city,
            state,
            // hours,
            contact,
            // ownerId,
            category,
            businessImage: businessImageUrl
          })
        );
        history.push(`/businesses/${newBusiness.id}`);
      }

        const showErrors = errors.map((error) => (
        <div className="error-message" key={error}>
          {error}
        </div>
        ));

    return(
        <form className="business-form" onSubmit={subby}>
        <h2 className="title">Create a Business</h2>
        <ul className="errors">{isSubmitted && showErrors}</ul>

        <div className="form-css">
          <div className="form-box">
          <label className="form-stuff">
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

          <label className="form-stuff">
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

          <label className="form-stuff">
            {/* City */}
            <input
              className="form-input"
              type="text"
              name="city"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </label>

          <label className="form-stuff">
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
          <label className="form-stuff">
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
          </label>
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

          <label className="form-stuff">
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

          <label className="form-stuff">
            <input
              className="form-input"
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          <label className="form-stuff">
            <input
              className="form-input"
              type="text"
              name="businessImage"
              placeholder="Business Image URL"
              value={businessImageUrl}
              onChange={(e) => setBusinessImageUrl(e.target.value)}
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
