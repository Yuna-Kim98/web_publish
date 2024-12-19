import React from 'react';
import SkillsCodingList from './SkillsCodingList';

export default function SkillsCoding() {
    const list = [
        { "major":"HTML", "percent":"98%" },
        { "major":"CSS", "percent":"90%" },
        { "major":"JavaScript", "percent":"90%" },
        { "major":"TypeScript", "percent":"80%" },
        { "major":"React", "percent":"79%" },
        { "major":"NodeJS", "percent":"68%" },
    ];
    
    return (
        <article className="skills__coding">
            <h3 className="skill__title">Coding Skills</h3>
            <ul>
                { list && list.map((item) => 
                    <SkillsCodingList 
                        major={item.major}
                        percent={item.percent}
                    />
                )}
            </ul>
        </article>
    );
}

