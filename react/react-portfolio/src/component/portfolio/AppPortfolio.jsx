import React from 'react';
import Header from './header/Header';
import HeaderIcon from './header/HeaderIcon';
import HeaderMenuList from './header/HeaderMenuList';
import Content from './content/Content';
import Home from './content/Home';
import AboutMe from './content/AboutMe';
import MySkills from './content/MySkills';

export default function AppPortfolio() {
    return (
        <div>
            <Header>
                <HeaderIcon />
                <HeaderMenuList />
            </Header>
            <Content>
                <Home />
                <AboutMe />
                <MySkills />
            </Content>
        </div>
    );
}