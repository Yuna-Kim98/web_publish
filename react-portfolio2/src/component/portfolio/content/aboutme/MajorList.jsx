import React from 'react';
import Major from './Major.jsx';
import { faServer, faMobile  } from '@fortawesome/free-solid-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';

export default function MajorList() {
    const majorList = [
        {
            "icon":faHtml5,
            "majorName":"Front-end",
            "des":"HTML, CSS, JavaScript, TypeScript, React, WebAPIs"
        },
        {
            "icon":faMobile,
            "majorName":"Mobile",
            "des":"Android Studio, React Native, iOS, Swift, Java, Kotlin"
        },
        {
            "icon":faServer,
            "majorName":"Back-end",
            "des":"Java, JavaScript, Go, Kotlin, Spring, Spring Boot"
        }
    ];

    return (
        <ul className="majors">
            { majorList && majorList.map((item) => 
                <li className="major">
                    <Major 
                        icon={item.icon}
                        majorName={item.majorName}
                        des={item.des}
                    />
                </li>
            )}
        </ul>
    );
}
