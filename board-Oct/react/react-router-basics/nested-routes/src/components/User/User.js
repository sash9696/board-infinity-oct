import React from 'react';
import { Link } from 'react-router-dom';
import './User.css';

function User() {
    return (
        <div>
            <h1>User Page</h1>


            <nav style={{
                margin: "20px 0",
                display: 'flex',
                justifyContent: 'space-around',
                width: 200
            }} >
                <Link to='/user/profile'>Profile</Link>
                <Link to='/user/account'>Account</Link>
            </nav>
        </div>

    )
}

export default User