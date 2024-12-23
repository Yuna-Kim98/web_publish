import React from 'react';
import SectionWrap from '../SectionWrap.jsx';
import SkillsCodingList from './SkillsCodingList.jsx';
import SkillsToolEtcList from './SkillsToolEtcList.jsx';

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
        <SectionWrap
            id="skill"
            title="My Skill"
            description="Skills & Attributes"
            des2="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Nobis beatae, aliquid ratione commodi nam ex voluptate rem 
                eveniet cupiditate optio natus? Cum, harum eum sint id quod 
                nulla adipisci. Sunt?"
        >
            <div className="skills">
                <SkillsCodingList />
                {list && list.map((item) => 
                    <SkillsToolEtcList
                        aClass={item.aClass}
                        title={item.title}
                        list={item.list}
                    />
                )}
            </div>
        </SectionWrap>
    );
}