import React from 'react';
import Header from './Header.jsx';
import HeaderTop from './header/HeaderTop.jsx';
import HeaderMiddle from './header/HeaderMiddle.jsx';

export default function AppOliveYoung() {
    return (
        <Header>
            <HeaderTop />
            <HeaderMiddle />
        </Header>
    );
}