import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import BusinessFormModal from './businesses/businessFormMODAL';
import './NavBar.css';
import search from './search.png'
import LoginFormModal from './auth/LoginMODAL';
import SignupFormModal from './auth/SignUpMODAL';

const NavBar = () => {

    const loggedInUser = useSelector(state => state.session.user)

    useEffect(() => {

    },[])

    return (
        <nav className='nav'>
            <div className='nav-bar'>
                <div className='nav-item'>
                    <NavLink to='/' exact={true} activeClassName='active'>
                        halp
                    </NavLink>
                </div>
                <div className='nav-item'>
                    <input
                        className="search-input"
                        type="text"
                        name="search"
                        placeholder="Search by name..."
                    />
                    <button className='search-button'>
                        <img className='search-image' src={search}></img>
                    </button>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div className='left-side'>
                    <div className='create-business-modal'>
                        {/* <NavLink to='/businesses/new' exact={true} activeClassName='active'>
            New Business
          </NavLink> */}
                        {loggedInUser && (<button className='business-modal-button'>
                            <BusinessFormModal />
                        </button>)}
                       {loggedInUser && (<button className='business-modal-button'>
                            <LogoutButton />
                        </button>)}
                    </div>

                    {!loggedInUser && (<div className='sign-login-buttons'>
                    <div className='nav-item' id='sign-up-button'>
                        {/* <NavLink className='login' to='/login' exact={true} activeClassName='active'>
                            Login
                        </NavLink> */}
                        <LoginFormModal />
                    </div>
                    <div className='nav-item' id='sign-up-button'>
                        {/* <NavLink className='sign-up' to='/sign-up' exact={true} activeClassName='active'>
                            Sign Up
                        </NavLink> */}
                        <SignupFormModal />
                    </div>
                        </div>)}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
