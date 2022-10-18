import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import BusinessFormModal from './businesses/businessFormMODAL';
import './NavBar.css';
import search from './search.png'

const NavBar = () => {
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
                        <button className='business-modal-button'>
                            <BusinessFormModal />
                        </button>
                        <button className='business-modal-button'>
                            <LogoutButton />
                        </button>
                    </div>
                    <div className='nav-item' id='login-button'>
                        <NavLink className='login' to='/login' exact={true} activeClassName='active'>
                            Login
                        </NavLink>
                    </div>
                    <div className='nav-item' id='sign-up-button'>
                        <NavLink className='sign-up' to='/sign-up' exact={true} activeClassName='active'>
                            Sign Up
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
