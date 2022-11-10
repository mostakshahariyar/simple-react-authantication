import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>This is Home section.</h2>
            <Outlet />
        </div>
    );
};

export default Home;