import React from 'react';
import Title from './Title';
import SkillsCoding from './SkillsCoding';

export default function MySkills() {
    return (
        <section id="skill" className="section max-container">
            <Title 
                title="My Skills" 
                description="Skills & Attributes"
                des2="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Nobis beatae, aliquid ratione commodi nam ex voluptate rem 
                eveniet cupiditate optio natus? Cum, harum eum sint id quod 
                nulla adipisci. Sunt?"
            />

            <div className="skills">
                <SkillsCoding />

                <article className="skills__tools">
                    <h3 className="skill__title">Tools</h3>
                    <ul>
                        <li>Visual Studio Code</li>
                        <li>IntelliJ</li>
                        <li>Android Studio Code</li>
                        <li>iOS development tools</li>
                        <li>Eclipse</li>
                    </ul>
                </article>
                <article className="skills__etc">
                    <h3 className="skill__title">Etc</h3>
                    <ul>
                        <li>Git</li>
                        <li>Scrum Master</li>
                        <li>SVN</li>
                    </ul>
                </article>
            </div> 
        </section>
    );
}