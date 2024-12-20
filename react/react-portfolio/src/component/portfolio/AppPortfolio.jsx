import React from 'react';
import "./css/style.css";
import Header from './header/Header.jsx';
import HeaderIcon from './header/HeaderIcon.jsx';
import HeaderMenuList from './header/HeaderMenuList.jsx';
import Content from './content/Content.jsx';
import Home from './content/Home.jsx';
import AboutMe from './content/aboutme/AboutMe.jsx';
import MySkills from './content/myskills/MySkills.jsx';
import MyWork from './content/mywork/MyWork.jsx';
import Testimonial from './content/testimonial/Testimonial.jsx';
import Footer from './footer/Footer.jsx';
import Arrow from './content/Arrow.jsx';

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
                <MyWork />
                <Testimonial />
                <Arrow />
            </Content>
            <Footer />
        </div>
    );
}