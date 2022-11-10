import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';

const SignIn = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h2>Please Log In</h2>
            <input type="email" />
            <br />
            <input type="password" />
            <br />
            <input type="submit" value="Login" />
            <br /><br /><br />
            <p>New user? <Link to='/signup'>Sign Up</Link></p>
            <br /><br /><br />
            <button onClick={signInUsingGoogle}>Google with Sign In</button>
        </div>
    );
};

export default SignIn;