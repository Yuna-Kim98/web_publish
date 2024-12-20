import React from 'react';
import SkillsToolEtcList from './SkillsToolEtcList.jsx';

export default function SkillsToolEtc({aClass, title, list}) {
    return (
        <>
            <article className={aClass}>
                <h3 className="skill__title">{title}</h3>
                <ul>
                    { list && list.map((item) => 
                        <SkillsToolEtcList list={item.tool} />
                    )}
                </ul>
            </article>
        </>
    );
}