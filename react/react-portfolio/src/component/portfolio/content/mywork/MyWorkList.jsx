import React, { useEffect, useState } from 'react';
import Title from '../Title.jsx';
import MyWorkButton from './MyWorkButton.jsx';
import MyWork from './MyWork.jsx';

export default function MyWorkList() {
    const [btnList, setBtnList] = useState([]);
    const [projectList, setProjectList] = useState([]);
    const [category, setCategory] = useState("All");
    const [select, setSelect] = useState("All"); 

    useEffect(() => {
        fetch("data/portfolio.json")
            .then(result => result.json())
            .then((jsonData) => {
                setBtnList(jsonData.btnList);

                if (category === "All") {
                    setProjectList(jsonData.projectList);
                } else {
                    const filterProject = jsonData.projectList.filter((project) => project.category === category);
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
        <section id="work" className="section max-container">    
            <Title title="My work" description="Projects"/>
            <ul className="categories">
                { btnList && btnList.map((item) => 
                    <li>
                        <MyWorkButton
                            click={handleBtnClickReq}
                            className={item.category === select ? "category category--selected" : "category"}
                            category={item.category}
                            count={item.count}
                        />
                    </li>
                )}
            </ul>

            <ul className="projects">
                { projectList && projectList.map((item) =>
                    <li>
                        <MyWork img={item.img} title={item.title} des={item.des} />
                    </li>
                )}
            </ul>    
        </section>
    );
}