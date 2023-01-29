import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import './navbar.scss';

export default function Navbar() {
    const [menus] = useState([
        {
            path: 'new-arrival',
            name: 'New Arrival',
        },
        {
            path: 'categories',
            name: 'Categories',
        },
        {
            path: 'collection',
            name: 'Collection',
        },
        {
            path: 'blog',
            name: 'Blog',
        }
    ])
    return ( 
        <nav className="navbar">
            <div className="navbar-container container">
                {/* Logo */}
                <div className="navbar-logo">
                    <img src="https://site-images.similarcdn.com/url?url=https%3A%2F%2Fplay-lh.googleusercontent.com%2FahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn&h=d8d8cbc6dd496f3dc784bb73835616d040b2b765630c2d5a7a4c162fc9136093" alt="" />
                </div>
                {/* Menus */}
                <ul className="navbar-menus">
                    {
                        menus.map((menu, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={menu.path}>{ menu.name }</NavLink>
                                </li>
                            );
                        })
                    }
                </ul>
                {/* Action */}
                <div className="navbar-actions">
                    <button className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9s-9-4.032-9-9s4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7c0-3.868-3.133-7-7-7c-3.868 0-7 3.132-7 7c0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828l-1.415 1.415l-2.828-2.829l1.414-1.414z"/></svg>
                    </button>
                    <button className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M12 2a4 4 0 0 1 4 4h2.035a2 2 0 0 1 1.999 1.929l.428 12A2 2 0 0 1 18.464 22H5.536a2 2 0 0 1-1.998-2.071l.428-12A2 2 0 0 1 5.965 6H8a4 4 0 0 1 4-4ZM8 8H5.965l-.429 12h12.928l-.429-12H16v1a1 1 0 0 1-1.993.117L14 9V8h-4v1a1 1 0 0 1-1.993.117L8 9V8Zm4-4a2 2 0 0 0-1.995 1.85L10 6h4a2 2 0 0 0-2-2Z"/></g></svg>
                    </button>
                    <button className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5Z"/><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2Zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0Z"/></svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}