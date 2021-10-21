import React from 'react'
import logo from '../../logo.svg';
import { Link } from 'react-router-dom'
import './Style.scss';
import { useSelector } from 'react-redux';

export const Navbar = () => {

    const { cartItems } = useSelector(state => state.cart);

    const numberCartShop = cartItems.length

    return (
        <nav className="navs">
            <div className="container">
                <div className="navs-content">
                    <Link to="/" className="navs-content__logo">
                        <img src={logo} alt="" />
                    </Link>
                    <div className="navs-content__links">
                        <Link to="/cart">
                            {numberCartShop}
                            <i className="fa fa-shopping-basket"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
