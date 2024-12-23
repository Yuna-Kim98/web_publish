import React, { useEffect, useState } from 'react';
import SectionWrap from '../SectionWrap.jsx';
import MyWorkButtonList from './MyWorkButtonList.jsx';
import MyWorkProjectList from './MyWorkProjectList.jsx';

export default function MyWorkList() {
    const [btnList, setBtnList] = useState([]);
    const [projectList, setProjectList] = useState([]);
    const [category, setCategory] = useState("All");
    const [select, setSelect] = useState("All"); 

    useEffect(() => {
        fetch("/data/portfolio.json")
            .then(result => result.json())
            .then((jsonData) => {
                setBtnList(jsonData.btnList);

                if (category === "All") {
                    setProjectList(jsonData.projectList);
                } else {
                    const filterProject = jsonData.projectList.filter((list) => list.category === category);
                    setProjectList(filterProject);
                }
            })
            .catch(error => console.log(error))
    }, [category]);

    const handleBtnClickReq = (category) => {
        setCategory(category);
        setSelect(category);
    }

    return (
        <SectionWrap
            id="work"
            title="My Work"
            description="Projects"
        >
            <MyWorkButtonList btnList={btnList} click={handleBtnClickReq} select={select} />
            <MyWorkProjectList projectList={projectList} />
        </SectionWrap>
    );
}