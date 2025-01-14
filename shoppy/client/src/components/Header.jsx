import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";

export default function Header() {
    return (
        <div className='header-outer'>
            <div className='header'>    
                <Link to='/' className='header-left'>
                    <FiShoppingBag />
                    <span>Shoppy</span>
                </Link>
                <nav className='header-right'>
                    <Link to='/all' className='header-right-menu'>Products</Link>
                    <Link to='/cart' className='header-right-menu'>Carts</Link>
                    <Link to='/login'>
                        <button type='button'>Login</button>
                    </Link>
                    <Link to='/signup'>
                        <button type='button'>SignUp</button>
                    </Link>
                </nav>
            </div>
        </div>
    );
}