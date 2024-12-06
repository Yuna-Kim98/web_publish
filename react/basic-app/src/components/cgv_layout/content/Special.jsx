import { useEffect, useState } from "react";
import EventTitle from "./EventTitle.jsx";
import SpecialItem from "./SpecialItem.jsx";

export default function Speicail() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch("/data/cgv_content.json")
            .then((data) => data.json())
            .then((jsonData) => setList(jsonData.specialList))
            .catch((error) => console.log(error));
    }, []);

    return(
        <div className="main-content-specialhall">
            <EventTitle text1='특별관' text2='전체보기' />
            <div className="specialhall-list">
                <div>
                    <img src="https://img.cgv.co.kr//Front/Main/2021/1209/16390080561620.png" alt="specialHall1" />
                </div>
                <ul>
                    {list && list.map((list) =>
                        <li><SpecialItem text={list.text} hashtag={list.hashtag} /></li>
                    )}
                </ul>
            </div>
        </div>
    );
}