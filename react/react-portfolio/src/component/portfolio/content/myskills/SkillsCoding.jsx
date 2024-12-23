import React from 'react';

export default function SkillsCoding({major, percent}) {
    return (
        <>
            <li className="bar">
                <div className="bar__metadata"><span>{major}</span><span>{percent}%</span></div>
                <div className="bar__bg"><div className="bar__value" style={{"width": `${percent}%`}}></div></div>
            </li>
        </>
    );
}