import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";
import { AuthContext } from '../auth/AuthContext.js';
import { CartContext } from '../context/CartContext.js';
import axios from 'axios';

export default function Header() {
    const {cartCount, setCartCount, cartList, setCartList} = useContext(CartContext);
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    // 로그인 상태에 따라 cartCount 값 변경
    useEffect(() => {
        if (isLoggedIn) {
            // DB 연동  로그인 id --> 장바구니 아이템 갯수 가져오기
            const id = localStorage.getItem("user_id");
            axios.post("http://localhost:9000/cart/count", {"id": id})
                .then(res => {
                    console.log('count -->', res.data.count);
                    setCartCount(res.data.count);
                })
                .catch(error => console.log(error));
            
            axios.post("http://localhost:9000/cart/items", {"id": id})
                .then(res => {
                    console.log('list -->', res.data.count);
                    setCartList(res.data);
                })
                .catch(error => console.log(error));
        } else {
            // 로그인 상태일 때만 상품을 장바구니에 담을 수 있게 함. 따라서 로그아웃 상태일 때는 무조건 cartCount의 값이 0이 되도록 초기화.
            setCartCount(0);
        }
    }, [isLoggedIn]);

    console.log('Header :: cartList --> ', cartList);
    console.log('Header :: cartCount --> ', cartCount);

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