import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import { BsCartCheckFill } from "react-icons/bs";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='links'>
            <Link to="/">Shop</Link>
            <Link to="/cart">
                <BsCartCheckFill link="/cart">

                </BsCartCheckFill>
            </Link>
            </div>
        </div>
    )
}

export default Navbar