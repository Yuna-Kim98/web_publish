import { useEffect, useState } from "react";
import EventTitle from "./EventTitle.jsx";
import SpecialItem from "./SpecialItem.jsx";

export default function Speicail() {
    const [list, setList] = useState([]);
    const [name, setName] = useState("SUITE CINEMA");
    const [specialImg, setSpecialImg] = useState("https://img.cgv.co.kr//Front/Main/2021/1209/16390080561620.png");

    useEffect(() => {
        fetch("data/cgv_content.json")
            .then((data) => data.json())
            .then((jsonData) => {
                setList(jsonData.specialList)
            })
            .catch((error) => console.log(error));
    }, []);

    const handleSpecialImg = (text) => {
        if (text === "SUITE CINEMA") {
            setName(text);
            setSpecialImg("https://img.cgv.co.kr//Front/Main/2021/1209/16390080561620.png");
        } else if (text === "CINE & LIVINGROOM") {
            setName(text);
            setSpecialImg("https://img.cgv.co.kr//Front/Main/2022/0616/16553622935690.png");
        } else if (text === "4DX") {
            setName(text);
            setSpecialImg("https://img.cgv.co.kr//Front/Main/2024/1203/17331884315310.png");
        } else if (text === "CINE de CHEF") {
            setName(text);
            setSpecialImg("https://img.cgv.co.kr//Front/Main/2021/1130/16382612660560.png");
        }
    }

    return(
        <div className="main-content-specialhall">
            <EventTitle text1='특별관' text2='전체보기' />
            <div className="specialhall-list">
                <div>
                    <img src={specialImg} alt="specialHall1" />
                </div>
                <ul>
                    {list && list.map((list) =>
                        <li className={ list.text === name ? "specialhall-list-hover" : "specialhall-list-normal"}>
                            <SpecialItem className={ list.text === name ? "specialhall-hover-span" : "specialhall-span" } 
                                text={list.text} hashtag={list.hashtag} click={handleSpecialImg}/>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}