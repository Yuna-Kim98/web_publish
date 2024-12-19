import React from 'react';
import { Outlet, Link } from "react-router-dom";
// Link : a 태그와 같은 역할을 함. a 태그를 사용할 경우 리액트에서 자동으로 Link로 변경
import Header from './Header.jsx';

export default function Layout() {
    return (
        <div>
            <Header>
                <Link to="" style={{"padding": "20px"}}>Home</Link>
                <Link to="/login" style={{"padding": "20px"}}>Login</Link>
                <Link to="/signup" style={{"padding": "20px"}}>Sign Up</Link>
                <Link to="/about" style={{"padding": "20px"}}>About</Link>
                <Link to="/support" style={{"padding": "20px"}}>Support</Link>
                <Link to="/bestseller" style={{"padding": "20px"}}>Best Seller</Link>
            </Header>
            <Outlet /> {/* Outlet : Route가 주는 대로 내용 실행 */}
            {/* <Footer></Footer> */}
        </div>
    );
}