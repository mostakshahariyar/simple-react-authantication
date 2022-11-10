import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div>
            <h2>Please Sign Up</h2>
            <input type="text" placeholder='name' />
            <br />
            <input type="email" placeholder='example@site.com' />
            <br />
            <input type="password" placeholder='password must have more than 6' />
            <br />
            <input type="submit" value="Submit" />
            <br /><br /><br />
            <p>Already register?<Link to='/signin'>Sign In</Link> </p>
        </div>
    );
};

export default Signup;