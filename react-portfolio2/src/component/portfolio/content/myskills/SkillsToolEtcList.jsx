import React from 'react';
import SkillsToolEtc from './SkillsToolEtc.jsx'

export default function SkillsToolEtcList({aClass, title, list}) {
    return (
        <>
            <article className={aClass}>
                <h3 className="skill__title">{title}</h3>
                <ul>
                    { list && list.map((item) => 
                        <SkillsToolEtc list={item.tool} />
                    )}
                </ul>
            </article>
        </>
    );
}