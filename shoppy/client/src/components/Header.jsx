import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";
import { AuthContext } from '../auth/AuthContext.js';

export default function Header({cartCount}) {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLoginToggle = () => {
        if (isLoggedIn) { // Logout 버튼 클릭
            const select = window.confirm('로그아웃 하시겠습니까?');
            if (select) {
                localStorage.removeItem("token");
                localStorage.removeItem("user_id");
                setIsLoggedIn(false);
                navigate('/');
            }
            console.log('select --> ', select);
        } else {
            navigate('/login');
        }
    }

    console.log('isLoggedIn --> ', isLoggedIn);

    return (
        <div className='header-outer'>
            <div className='header'>    
                <Link to='/' className='header-left'>
                    <FiShoppingBag />
                    <span>Shoppy</span>
                </Link>
                <nav className='header-right'>
                    <Link to='/all' className='header-right-menu'>Products</Link>
                    <Link to='/cart' className='header-right-menu'>Carts<span>({cartCount})</span></Link>
                    <button type='button' onClick={handleLoginToggle}>
                        { isLoggedIn ? "LogOut" : "LogIn" }
                    </button>
                    <Link to='/signup'>
                        <button type='button'>SignUp</button>
                    </Link>
                    <Link to='/products/new'>
                        { isLoggedIn && <button type='button'>New Product</button> }
                    </Link>
                </nav>
            </div>
        </div>
    );
}