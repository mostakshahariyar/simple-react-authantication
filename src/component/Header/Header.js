import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user)
    return (
        <NavLink className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/signin'>Sign In</Link>
            <Link to='/shipping'>Shipping</Link>
            <Link to='/placeorder'>PlaceOrder</Link>
            <span> {user.displayName} </span>
            {user.email && <button onClick={logOut}>Log out</button>}

        </NavLink>
    );
};

export default Header;