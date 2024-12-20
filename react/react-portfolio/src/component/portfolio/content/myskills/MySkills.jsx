import React from 'react';
import Title from '../Title.jsx';
import SkillsCoding from './SkillsCoding.jsx';
import SkillsToolEtc from './SkillsToolEtc.jsx';

export default function MySkills() {
    const list = [
        {
            "aClass":"skills__tools",
            "title": "Tools",
            "list" : [
                { "tool": "Visual Studio Code" },
                { "tool": "IntelliJ" },
                { "tool": "Android Studio Code" },
                { "tool": "iOS development tools" },
                { "tool": "Eclipse" }
            ]
        },
        {
            "aClass":"skills__etc",
            "title": "Etc",
            "list" : [
                { "tool": "Git" },
                { "tool": "Scrum Master" },
                { "tool": "SVN" }
            ]
        }
    ];

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
                {list && list.map((item) => 
                    <SkillsToolEtc
                        aClass={item.aClass}
                        title={item.title}
                        list={item.list}
                    />
                )}
            </div> 
        </section>
    );
}