import React from 'react';
import './NavItem.css';
import { Link, useNavigate } from 'react-router-dom';

function NavItem({ navOption, link }) {

    const navigate = useNavigate()


    const navigateUser = () => {
        navigate(link)
    }

    return (
        // <Link to={link} >
        <div
            className='nav_option'
            onClick={navigateUser}
        >{navOption}</div>
        // </Link>
    )
}

export default NavItem