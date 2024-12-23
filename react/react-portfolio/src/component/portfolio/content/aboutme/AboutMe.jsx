import React from 'react';
import SectionWrap from '../SectionWrap.jsx';
import Title from '../Title.jsx';
import MajorList from './MajorList.jsx';
import JobList from './JobList.jsx';

export default function AboutMe() {
    return (
        <SectionWrap
            id="about"
            title="About Me"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Iure natus, temporibus perspiciatis repudiandae nostrum modi
                doloremque expedita non eius ipsum! Beatae porro adipisci 
                omnis architecto dignissimos. Iusto ipsa inventore adipisci."
        >
            <MajorList />
            <JobList />
        </ SectionWrap>
    );
}
