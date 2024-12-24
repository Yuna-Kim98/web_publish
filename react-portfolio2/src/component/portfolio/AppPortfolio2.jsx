import React from 'react';
import "./css/style.css";
import Header from './header/Header.jsx';
import HeaderIcon from './header/HeaderIcon.jsx';
import HeaderMenuList from './header/HeaderMenuList.jsx';
import Content from './content/Content.jsx';
import Home from './content/Home.jsx';
import SectionWrap from './content/SectionWrap.jsx';
import MajorList from './content/aboutme/MajorList.jsx';
import JobList from './content/aboutme/JobList.jsx';
import MySkills from './content/myskills/MySkills.jsx';
import MyWork from './content/mywork/MyWork.jsx';
import Testimonial from './content/testimonial/Testimonial.jsx';
import Footer from './footer/Footer.jsx';
import Arrow from './content/Arrow.jsx';

export default function AppPortfolio2() {
    const sectionList = [
        {
            "id": "about",
            "title": "About me",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus, temporibus perspiciatis repudiandae nostrum modi doloremque expedita non eius ipsum! Beatae porro adipisci omnis architecto dignissimos. Iusto ipsa inventore adipisci.",
            "children": [
                { "component": "MajorList" },
                { "component": "JobList" }
            ]
        },
        {
            "id": "skill",
            "title": "My Skills",
            "description": "Skills & Attributes",
            "des2": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis beatae, aliquid ratione commodi nam ex voluptate rem eveniet cupiditate optio natus? Cum, harum eum sint id quod nulla adipisci. Sunt?",
            "children": [
                { "component": "MySkills" }
            ]
        },
        {
            "id": "work",
            "title": "My work",
            "description": "Projects",
            "children": [
                { "component": "MyWork" }
            ]
        },
        {
            "id": "testimonial",
            "title": "Testimonial",
            "description": "See what they say about me",
            "children": [
                { "component": "Testimonial" }
            ]
        }
    ];

    const componentMap = {
        MajorList, // "MarjorList":MajorList -> value 값만 적어줘도 됨
        JobList,
        MySkills,
        MyWork,
        Testimonial
    };

  //자식 컴포넌트 렌더링 :: 재귀함수
    const renderComponent = (childObj) => {
        const Component = componentMap[childObj.component];
        if (!Component) return null;    
        return (
            <Component key={childObj.component + JSON.stringify(childObj.props || {})} {...(childObj.props || {})}>
                {childObj.children && childObj.children.map((childObj) => renderComponent(childObj))}
            </Component>
        );
    };

    return (
        <div>
            <Header>
                <HeaderIcon />
                <HeaderMenuList />
            </Header>
            <Content>
                <Home />
                {sectionList && sectionList.map((section) => (
                    <SectionWrap
                        key={section.id}
                        id={section.id}
                        title={section.title}
                        description={section.description}
                        des2={section.des2}
                    >
                    {section.children.map((child) => renderComponent(child))}
                    </SectionWrap>
                ))}  
                <Arrow />
            </Content>
            <Footer />
        </div>
    );
}