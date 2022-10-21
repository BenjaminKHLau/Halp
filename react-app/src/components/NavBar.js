import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink, useHistory, useDispatch } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import BusinessFormModal from "./businesses/businessFormMODAL";
import "./NavBar.css";
import searchIcon from "./search.png";
import LoginFormModal from "./auth/LoginMODAL";
import SignupFormModal from "./auth/SignUpMODAL";
import halplogo from "./halplogo.png";
import { getAllCategoriesThunk } from "../store/categories";

const NavBar = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [isSubmitted, setIsSubmitted] = useState('');

  const loggedInUser = useSelector((state) => state.session.user);

//   useEffect(() => {
//   }, [isSubmitted]);

  async function subby(e) {
    e.preventDefault();
    setIsSubmitted(true);

    history.push(`/businesses/search?input=${search}`)
    setIsSubmitted(false);
  }
  console.log('AAAAAAAAAA\n\n\n\n\n\n\nGet all categories running in navbar')

  useEffect(() => {
    dispatch(getAllCategoriesThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllCategoriesThunk());
  }, [dispatch]);

  return (
    <nav className="nav">
      <div className="nav-bar">
        <div className="nav-item">
          <NavLink to="/" exact={true} activeClassName="active">
            {/* halp */}
            <img src={halplogo} className="halp-logo" />
          </NavLink>
        </div>
        <form onSubmit={subby}>
          <div className="nav-item">
            <input
              className="search-input"
              type="text"
              name="search"
              placeholder="Search by name..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="search-button" type="submit" disabled={isSubmitted} >
              <img className="search-image" src={searchIcon}></img>
            </button>
          </div>
        </form>
        <div></div>
        <div></div>
        <div></div>
        <div className="left-side">
          <div className="create-business-modal">
            {/* <NavLink to='/businesses/new' exact={true} activeClassName='active'>
            New Business
          </NavLink> */}

            <div className="logged-in-buttons">
              {loggedInUser && (
                <button className="business-modal-button">
                  <BusinessFormModal />
                </button>
              )}
              {loggedInUser && (
                <button className="business-modal-button">
                  <LogoutButton />
                </button>
              )}
            </div>
          </div>

          {!loggedInUser && (
            <div className="sign-login-buttons">
              <div className="nav-item" id="sign-up-button">
                {/* <NavLink className='login' to='/login' exact={true} activeClassName='active'>
                            Login
                        </NavLink> */}
                <LoginFormModal />
              </div>
              <div className="nav-item" id="sign-up-button">
                {/* <NavLink className='sign-up' to='/sign-up' exact={true} activeClassName='active'>
                            Sign Up
                        </NavLink> */}
                <SignupFormModal />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
