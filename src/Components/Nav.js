import React from 'react'
import {animateScroll as scroll } from "react-scroll";

const Nav = () => {
    const links = [
        {
            title: 'Home',
            url: '/',
            icon: ''
        },
        {
            title: 'Projects',
            url: '/projects'
        },
        {
            title: 'Contact',
            url: '/contact',
        },
        {
            title: 'About',
            url: '/about-me'
        },
    ];
    const dropDown = () => {
        document.getElementById("")
    }
  return (
    <nav style={{backgroundColor: '#4f536f'}} className="navbar">
        <ul className='navbar-nav'>
            <a className="drop-down-nav">
                <i className="fa-solid fa-bars" style={{color: 'white'}}></i>
            </a>
            {links.map((link) => <li key={link.title}><a style={{ color: '#ffffff'}} href="{link.url}">{link.title}</a></li> )}
        </ul>
    </nav>
  )
}
// Nav.defaultProps = {
//     color: 
// }

export default Nav