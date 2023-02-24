import React from 'react';
import './Nav.css';
import NavItem from './NavItem/NavItem';

const navItems = [{
    name: 'Home',
    link: '/'
}, {
    name: 'About',
    link: '/about'
},
{
    name: 'Blog',
    link: '/blog'
},
{
    name: 'Contact Us',
    link: '/contact-us'
}
]

function Nav() {

    return (
        <div className='nav_container'>
            {navItems.map((item) => (
                <NavItem key={item.name} navOption={item.name} link={item.link} />
            ))}
        </div>
    )
}

export default Nav