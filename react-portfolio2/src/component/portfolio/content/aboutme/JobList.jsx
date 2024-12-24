import React from 'react';
import Job from './Job';

export default function JobList() {
    const jobList = [
        { 
            "img":"images/jobs/google.png", 
            "alt":"google", 
            "name":"Google as Junior Software Engineer",
            "period":"2019 Oct - Until now"
        },
        { 
            "img":"images/jobs/samsung.png", 
            "alt":"samsung", 
            "name":"Samsung as Junior Software Engineer",
            "period":"2010 Oct - 2019 Oct"
        }
    ];

    return (
        <ul className="jobs">
            { jobList && jobList.map((item)=> 
                <li className="job">
                    <Job 
                        img={item.img}
                        alt={item.alt}
                        name={item.name}
                        period={item.period}
                    />
                </li>
            )}
        </ul>
    );
}