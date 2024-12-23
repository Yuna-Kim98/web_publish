import React from 'react';
import SkillsCoding from './SkillsCoding.jsx';

export default function SkillsCodingList() {
    const list = [
        { "major":"HTML", "percent": 98 },
        { "major":"CSS", "percent": 90 },
        { "major":"JavaScript", "percent": 90 },
        { "major":"TypeScript", "percent": 80 },
        { "major":"React", "percent": 79 },
        { "major":"NodeJS", "percent": 68 }
    ];
    
    return (
        <article className="skills__coding">
            <h3 className="skill__title">Coding Skills</h3>
            <ul>
                { list && list.map((item) =>
                    <li className="bar">
                        <SkillsCoding
                            major={item.major}
                            percent={item.percent}
                        />
                    </li> 
                )}
            </ul>
        </article>
    );
}
