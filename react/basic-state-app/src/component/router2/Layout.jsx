import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './Header.jsx'

export default function Layout() {
    return (
        <div>
            <Header>
                <Link to="" style={{"padding": "20px"}}>Home</Link>
                <Link to="airbnb" style={{"padding": "20px"}}>Airbnb</Link>
                <Link to="aladin" style={{"padding": "20px"}}>Aladin</Link>
                <Link to="avatar" style={{"padding": "20px"}}>Avatar</Link>
                <Link to="counter" style={{"padding": "20px"}}>Counter</Link>
                <Link to="olive" style={{"padding": "20px"}}>Olive Young</Link>
                <Link to="yes24" style={{"padding": "20px"}}>Yes24</Link>
            </Header> 
            <Outlet />
            {/* <Footer>
                <div>Footer</div>
            </Footer> */}
        </div>
    );
}

