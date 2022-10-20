import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getAllCategoriesThunk } from "../../store/categories";
import "./category.css";

function GetAllCategories() {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getAllCategoriesThunk());
  }, [dispatch]);

  // let categoryUrls = {}

  // allCategories.forEach(cat => {
  //   let currUrl = new URL(`${window.location.href}businesses/search`)
  //   currUrl.searchParams.append('category', cat)
  //   categoryUrls[`${cat}`] = currUrl
  // })
//   console.log(`all categories are ${allCategories}`)
//   let cat = "Entertainment"
//   console.log(`categoryUrls are ${categoryUrls[cat]}`)
//   console.log(categoryUrls)

  return (
    <>
      <h2 id="category_home_heading">Categories</h2>
    <div className="category_home_outer_outer_container">
      <div className="category_home_outer_container">
        {allCategories.map(cat => (
            // <Link to={categoryUrls[cat]}>
            <Link to={`/businesses/search?category=${cat}`}>
                <div className="category_home_card_container">
                    <p className="category_home_card_p">{cat}</p>
                </div>
            </Link>
        ))}
      </div>
    </div>
    </>
  );
}

export default GetAllCategories;
