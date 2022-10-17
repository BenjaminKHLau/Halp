import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Redirect } from "react-router-dom"


function BusinessFormComponent(){
    
    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [hours, setHours] = useState("")
    const [contact, setContact] = useState("")
    const [ownerId, setOwnerId] = useState(0)
    const [category, setCategory] = useState("")
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
        //   createNewBusinessThunk({
        //     name,
        //     description,
        //     address,
        //     city,
        //     state,
        //     hours,
        //     contact,
        //     ownerId,
        //     category,
        //   })
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
            <input
              className="form-input"
              type="text"
              name="state"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </label>
  
          <label className="form-stuff">
            <input
              className="form-input"
              type="text"
              name="hours"
              placeholder="Hours"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
            />
          </label>
  
          <label className="form-stuff">
            <input
              className="form-input"
              type="text"
              name="contact"
              placeholder="Contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </label>
  
          <label className="form-stuff">
            <input
              className="form-input"
              type="number"
              name="ownerId"
              placeholder="OwnerId"
              value={ownerId}
              onChange={(e) => setOwnerId(e.target.value)}
            />
          </label>
  
          <label className="form-stuff">
            {/* Description */}
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
              Create Spot
            </button>
          </div>
        </div>
      </form>

        )

}

export default BusinessFormComponent