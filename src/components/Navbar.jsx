import React from 'react'
import {Link} from 'react-router-dom';
import logo_img from '../assets/logo.jpg'
import "../Styles/Navbar.css"
import { RiHomeSmileLine } from "react-icons/ri";
import { LiaBlogSolid } from "react-icons/lia";

function Navbar() {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={logo_img} alt='' />
            </div>
            <p className='name'>Chef Master</p>
            <ul className='navbarUl'>
                <li>
                    <Link to='/' className='link'><RiHomeSmileLine className='home_logo' /> Home</Link>
                </li>
                <li>
                    <Link to='/Favorite' className='link'><LiaBlogSolid className='fb_logo' />Blog</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar