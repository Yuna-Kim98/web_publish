import React from 'react';
import Major from './Major';
import { faServer, faMobile  } from '@fortawesome/free-solid-svg-icons';

export default function MajorList() {
    const majorList = [
        {
            // "icon":faHtml5,
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
                <li>
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
