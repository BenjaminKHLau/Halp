import {useState, useEffect} from "react";
import {useDispatch} from 'react-redux';
import {useHistory} from "react-router-dom";
import { createCategoryThunk } from "../../store/categories";

function CategoryFormComponent() {
    const dispatch = useDispatch()
    const history = useHistory()

    const [category, setCategory] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [errors, setErrors] = useState([])

    useEffect(() => {
        const currErrors = []
        setErrors([])

        if (!category) currErrors.push("Category is required.")
        setErrors(currErrors)

        if (errors.length) setIsSubmitted(false)
    }, [category])

    async function subby(e) {
        e.preventDefault();
        setIsSubmitted(true);
        if (errors.length > 0) {
            return;
        }

        let newCategory = await dispatch(
            createCategoryThunk({
                type: category
            })
        )

        if(newCategory.errors) setErrors([...Object.values(newCategory.errors)])
        else history.push(`/`)

    }

    const showErrors = errors.map((error) => (
        <div className="error-message" key={error}>
            {error}
        </div>
    ));

    return (
        <form className="business-form" onSubmit={subby}>
            <h2 className="title">Create a New Category</h2>
            <ul className="errors">{isSubmitted && showErrors}</ul>

            <div className="add-info-label">
                <label>
                    Add a new category to be used for your business
                </label>
            </div>

            <div className="form-css">
                <div className="form-box">


                    <label className="form-stuff">Category
                        <input
                            className="form-input"
                            type="text"
                            name="category"
                            placeholder="Category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
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
                        Create Category
                    </button>
                </div>
            </div>
        </form>

    )
}

export default CategoryFormComponent;
