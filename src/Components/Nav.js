import React from 'react'

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
  return (
    <nav>
        <ul>
            {links.map((link) => <li><a href="{link.url}">{link.title}</a></li> )}
        </ul>
    </nav>
  )
}
// Nav.defaultProps = {
//     title: 'this is the nav',
// }

export default Nav